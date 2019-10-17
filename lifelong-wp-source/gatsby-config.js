// require dotenv so that it's useable.
require("dotenv").config()
module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: process.env.WP_BASE_URL,
                hostingWPCOM: false,
                useACF: true,
                excludedRoutes: [
                    "**/users",
                    "**/users/*",
                    "**/comments",
                    "**/settings",
                    "**/themes",

                ]
            }
        }
    ]
}