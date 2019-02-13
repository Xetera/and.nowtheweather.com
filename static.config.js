import { fetchWeather } from "./src/scrape";


export default {
  siteRoot: process.env.NODE_ENV === "production" ? "https://nowtheweather.com" : "http://localhost:3000",
  getSiteData: async () => {
    return ({
      weather: await fetchWeather(),
      title: 'And Now, The Weather',
    })
  }
}
