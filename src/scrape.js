import axios from "axios";
import { JSDOM } from "jsdom";
import { songs } from "./songs";
import dotenv from "dotenv";
import * as fs from "fs";
import { promisify } from "util";

/**
 * This file was used to scrape and combine the data that the website
 * current serves statically
 */

const writeFileAsync = promisify(fs.writeFile).bind(fs);

const getPosts = () => {
  const tumblr = axios.create({
    baseURL: "https://api.tumblr.com",
    params: {
      api_key: process.env.TUMBLR_KEY,
    },
  });
  const gatherAllPosts = async url => {
    const {
      data: { response },
    } = await tumblr.get(url);

    const urls = response.posts.map(post => post.post_url);

    if (!response._links) {
      return urls;
    }

    return [...urls, ...(await gatherAllPosts(response._links.next.href))];
  };
  return gatherAllPosts("/v2/blog/cecilspeaks/posts/text");
};

dotenv.load();

const genSelector = dom => selector => [...dom.querySelectorAll(selector)];

const flatMap = fn => arr =>
  arr.map(fn).reduce((all, arr) => [...all, ...arr], []);

const FILE_LOCATION = "songs.json";

const WIKI = "http://nightvale.wikia.com/wiki/Weather";

/**
 * The data on the wiki is separated by tables in years
 */
const YEARS = 7;

const headers = {
  "User-Agent": "https://and.nowtheweather.com",
};

const filterTables = ($, years) => $("h2 + .wikitable").slice(0, years);

const extractTableRow = e => [...e.querySelectorAll("tbody tr")];

const extractTableRows = flatMap(extractTableRow);

const extractRowData = (row, songs) => {
  const cells = [...row.querySelectorAll("td")];
  const [num, episode, song, artist] = cells.map(cell =>
    cell.textContent.trim()
  );

  if (!num) {
    return {};
  }

  return { num, episode, song, artist, url: songs[num] };
};

const processRows = rows =>
  rows.reduce((all, row) => {
    const song = extractRowData(row, songs);

    /**
     * rows are undefined ONLY in jsdom and not
     * in the actual dom.. don't know why
     * for some really dumb reason, some of the
     */
    if (!song.num) {
      return all;
    }

    return [...all, song];
  }, []);

const innerJoin = (one, two, key) =>
  one.reduce(
    (acc, current) => ({
      ...acc,
      [one[key]]: {
        ...current,
        ...two[key],
      },
    }),
    {}
  );

/**
 * Gather weather data from the Nightvale wiki
 * @typedef {Object} Weather
 * @property {string} num - episode number
 * @property {string} episode - episode name
 * @property {string} song - song name
 * @property {string} artist - artist name
 * @property {string | undefined} url - youtube song url
 * @return {Promise<Weather>}
 */
export const fetchWeather = () =>
  axios.get(WIKI, { headers }).then(async ({ data }) => {
    const dom = new JSDOM(data);
    const { document } = dom.window;
    const $ = genSelector(document);

    const tables = filterTables($, YEARS);
    const rows = extractTableRows(tables);
    const results = processRows(rows);
    const someResults = results.slice(0, 50);
    const all = await getPosts();
    await writeFileAsync("posts.json", JSON.stringify(all));
    return results;
  });
