import data from "./data.json"

export default {
  siteRoot: process.env.NODE_ENV === "production" ? "https://and.nowtheweather.com" : "http://localhost:3000",
  getSiteData: async () => {
    return ({
      data,
      title: 'And Now, The Weather',
    })
  }
}
