/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config();
module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-theme-lifelong-wp-source",
      options: {
        basePath: "/",
        wordPressUrl: process.env.WP_BASE_URL
      }
    }
  ]
};
