import { fetchWeather } from "./src/scrape";


export default {
  siteRoot: process.env.NODE_ENV === "production" ? "http://localhost:3000" : "https://nowtheweather.com",
  getSiteData: async () => {
    return ({
      weather: await fetchWeather(),
      title: 'And Now, The Weather',
    })
  }
}
