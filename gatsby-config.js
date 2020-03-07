require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/iodd2020osaka/",
  siteMetadata: {
    siteTitle: `インターナショナル・オープンデータ・デイ2020 大阪 -オンライン-`,
    siteTitleAlt: `IODD2020 OSAKA`,
    siteHeadline: `インターナショナル・オープンデータ・デイ2020 大阪 -オンライン-`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `http://iodd2020.lodosaka.jp/`,
    // Used for SEO
    siteDescription: `オンラインイベントとして開催する「IODD2020 OSAKA」の成果をまとめるページです．`,
    // Will be set on the <html /> tag
    siteLanguage: `ja`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@koujikozaki`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
/*
          {
            title: `About`,
            slug: `/about`,
          },
*/
        ],
        externalLinks: [
          {
            name: `Facebook`,
            url: `https://www.facebook.com/groups/592761284131510/`,
          },
          {
            name: `Website`,
            url: `http://wp.lodosaka.jp/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `インターナショナル・オープンデータ・デイ2020 大阪 -オンライン-`,
        short_name: `IODD2020 OSAKA`,
        description: `オンラインイベントとして開催する「IODD2020 OSAKA」の成果をまとめるページです．`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
