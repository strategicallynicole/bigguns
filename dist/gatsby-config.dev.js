"use strict";

var path = require("path");

var config = require("./src/utils/siteConfig");

var generateRSSFeed = require("./src/utils/rss/generate-feed");

var siteUrl = 'https://bigguns-3dc63.netlify.app';
var ghostConfig;

try {
  ghostConfig = require("./.ghost");
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY
    }
  };
} finally {
  var _ref = process.env.NODE_ENV === "development" ? ghostConfig.development : ghostConfig.production,
      apiUrl = _ref.apiUrl,
      contentApiKey = _ref.contentApiKey;

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error("GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README."); // eslint-disable-line
  }
}

if (process.env.NODE_ENV === "production" && config.siteUrl === "http://localhost:8000" && !process.env.SITEURL) {
  throw new Error("siteUrl can't be localhost and needs to be configured in siteConfig. Check the README."); // eslint-disable-line
}
/**
* This is the place where you can tell Gatsby which plugins to use
* and set them up the way you want.
*
* Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
*
*/


module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-source-data", "gatsby-transformer-remark", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: "".concat(__dirname, "/src/pages")
    }
  }, {
    resolve: "gatsby-plugin-sass",
    options: {
      inputFile: "".concat(__dirname, "/src/sass/main.scss"),
      outputFile: "".concat(__dirname, "/public/assets/css/main.css")
    }
  }, {
    resolve: "gatsby-remark-page-creator",
    options: {}
  }, {
    resolve: "@stackbit/gatsby-plugin-menus",
    options: {
      sourceUrlPath: "fields.url",
      pageContextProperty: "menus"
    }
  },
  /**
   *  Content Plugins
   */
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: path.join(__dirname, "src", "pages"),
      name: "pages"
    }
  }, // Setup for optimised images.
  // See https://www.gatsbyjs.org/packages/gatsby-image/
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: path.join(__dirname, "src", "images"),
      name: "images"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: "gatsby-source-ghost",
    options: process.env.NODE_ENV === "development" ? ghostConfig.development : ghostConfig.production
  },
  /**
   *  Utility Plugins
   */
  {
    resolve: "gatsby-plugin-ghost-manifest",
    options: {
      short_name: config.shortTitle,
      start_url: "/",
      background_color: config.backgroundColor,
      theme_color: config.themeColor,
      display: "minimal-ui",
      icon: "static/".concat(config.siteIcon),
      legacy: true,
      query: "\n                {\n                    allGhostSettings {\n                        edges {\n                            node {\n                                title\n                                description\n                            }\n                        }\n                    }\n                }\n              "
    }
  }, {
    resolve: "gatsby-plugin-feed",
    options: {
      query: "\n                {\n                    allGhostSettings {\n                        edges {\n                            node {\n                                title\n                                description\n                            }\n                        }\n                    }\n                }\n              ",
      feeds: [generateRSSFeed(config)]
    }
  }, {
    resolve: "gatsby-plugin-advanced-sitemap",
    options: {
      query: "\n                {\n                    allGhostPost {\n                        edges {\n                            node {\n                                id\n                                slug\n                                updated_at\n                                created_at\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostPage {\n                        edges {\n                            node {\n                                id\n                                slug\n                                updated_at\n                                created_at\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostTag {\n                        edges {\n                            node {\n                                id\n                                slug\n                                feature_image\n                            }\n                        }\n                    }\n                    allGhostAuthor {\n                        edges {\n                            node {\n                                id\n                                slug\n                                profile_image\n                            }\n                        }\n                    }\n                }",
      mapping: {
        allGhostPost: {
          sitemap: "posts"
        },
        allGhostTag: {
          sitemap: "tags"
        },
        allGhostAuthor: {
          sitemap: "authors"
        },
        allGhostPage: {
          sitemap: "pages"
        }
      },
      exclude: ["/dev-404-page", "/404", "/404.html", "/offline-plugin-app-shell-fallback"],
      createLinkInHead: true,
      addUncaughtPages: true
    }
  }, "gatsby-plugin-catch-links", "gatsby-plugin-react-helmet", "gatsby-plugin-force-trailing-slashes", "gatsby-plugin-offline"]
};