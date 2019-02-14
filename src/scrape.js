import axios from "axios";
import { JSDOM } from "jsdom";
import { songs } from "./songs";
import Youtube from "simple-youtube-api";
import dotenv from "dotenv";

dotenv.load();

const genSelector = (dom) =>
	(selector) => [...dom.querySelectorAll(selector)];

const flatMap = fn => arr =>
	arr.map(fn).reduce((all, arr) => [...all, ...arr], []);

const youtube = new Youtube(process.env.YOUTUBE_KEY);

const WIKI = "http://nightvale.wikia.com/wiki/Weather";

/**
 * The data on the wiki is separated by tables in years
 */
const YEARS = 7;

const headers = {
	"User-Agent": "https://and.nowtheweather.com"
};

export const lookUpWeather = ({ episode, artist }) =>
	youtube.searchVideos(`${artist} - ${episode}`, 1, { part: "statistics" })
		.then(([item]) => item)
		.then(({ id, title, durationSeconds }) => ({
			id,
			title,
			length: durationSeconds,
		}))
		.then(console.log);

const filterTables = ($, years) => $('h2 + .wikitable').slice(0, years);

const extractTableRow = e => [...e.querySelectorAll('tbody tr')];

const extractTableRows = flatMap(extractTableRow);

const extractRowData = (row, songs) => {
	const cells = [...row.querySelectorAll('td')];
	const [num, episode, song, artist] = cells.map(cell => cell.textContent.trim());

	if (!num) {
		return {};
	}

	return { num, episode, song, artist, url: songs[num] }
};

const processRows = rows => rows.reduce((all, row) => {
	const song = extractRowData(row, songs);

	/**
	 * rows are undefined ONLY in jsdom and not
	 * in the actual dom.. don't know why
	 * for some really dumb reason, some of the
	 */
	if (!song.num) {
		return all;
	}

	return [...all, song]
}, []);

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
export const fetchWeather = () => axios.get(WIKI, { headers }).then(({ data }) => {
	const dom = new JSDOM(data);
	const { document } = dom.window;
	const $ = genSelector(document);

	const tables = filterTables($, YEARS);
	const rows = extractTableRows(tables);
	return processRows(rows);
});
