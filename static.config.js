import { fetchWeather } from "./src/scrape";


export default {
  siteRoot: "http://localhost:3000",
  getSiteData: async () => {
    return ({
      weather: await fetchWeather(),
      title: 'And Now, The Weather',
    })
  }
}
