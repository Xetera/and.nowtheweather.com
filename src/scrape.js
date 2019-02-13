import axios from "axios";
import { JSDOM } from "jsdom";
import { songs } from "./songs";

const genSelector = (dom) =>
	(selector) => [...dom.querySelectorAll(selector)];

const flatMap = (fn, arr) =>
	arr.map(fn).reduce((all, arr) => [...all, ...arr], []);

const WIKI = "http://nightvale.wikia.com/wiki/Weather";

/**
 * The data on the wiki is separated by tables in years
 */
const YEARS = 7;

const headers = {
	"User-Agent": "https://and.nowtheweather.com"
};

/**
 * Gather weather data from the nightvale wiki
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

	const tables = $('h2 + .wikitable').slice(0, YEARS);

	const rows = flatMap(e => {
		const rowss = [...e.querySelectorAll('tbody tr')];
		return rowss;
	}, tables);

	return rows.reduce((all, row) => {
		const [num, episode, song, artist] = [...row.querySelectorAll('td')]
			.map(cell => cell.textContent.trim());

		/**
		 * rows are undefined ONLY in jsdom and not
		 * in the actual dom.. don't know why
		 * for some really dumb reason, some of the
		 */
		if (!num) {
			return all;
		}

		const data = {
			num, episode, song, artist, url: songs[num]
		};

		return [...all, data]
	}, []);
});
