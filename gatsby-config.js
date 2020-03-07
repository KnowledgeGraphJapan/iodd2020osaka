require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/iodd2020osaka",
  siteMetadata: {
    siteTitle: `インターナショナル・オープンデータ・デイ2020 大阪`,
    siteTitleAlt: `インターナショナル・オープンデータ・デイ2020 大阪`,
    siteHeadline: `インターナショナル・オープンデータ・デイ2020 大阪`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `http://iodd2020osaka.lodosaka.jp`,
    // Used for SEO
    siteDescription: `2020年3月7日から17日までの間、「インターナショナル・オープンデータ・デイ2020 大阪」をオンラインイベントとして開催しています。テーマは「大阪・関西のオープンデータの“いま”を集めよう！」です。`,
    // Will be set on the <html /> tag
    siteLanguage: `ja`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@koujikozaki`,
    siteLicense: `No rights reserved`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `提供情報`,
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
            name: `オープンデータ・デイ`,
            url: `https://opendataday.org/ja/`,
          },
          {
            name: `LODチャレンジ`,
            url: `http://lodc.jp`,
          },
          {
            name: `関西支部`,
            url: `http://wp.lodosaka.jp/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-159981023-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `インターナショナル・オープンデータ・デイ2020 大阪`,
        short_name: `IODD2020 OSAKA`,
        description: `2020年3月7日から17日までの間、「インターナショナル・オープンデータ・デイ2020 大阪」をオンラインイベントとして開催しています。テーマは「大阪・関西のオープンデータの“いま”を集めよう！」です。`,
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
