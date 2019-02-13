import { fetchWeather } from "./src/scrape";


export default {
  siteRoot: "https://and.nowtheweather.com",
  getSiteData: async () => {
    return ({
      weather: await fetchWeather(),
      title: 'And Now, The Weather',
    })
  }
}
