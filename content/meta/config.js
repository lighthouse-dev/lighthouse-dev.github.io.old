const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "lighthouse.log", // <title>
  shortSiteTitle: "lighthouse.log", // <title> ending for posts and pages
  siteDescription: "jslee blog",
  siteUrl: "https://lighthouse-dev.github.io",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "jslee",
  authorTwitterAccount: "_Lighthouse2",
  // info
  infoTitle: "lighthouse.log",
  infoTitleNote: "jslee blog",
  // manifest.json
  manifestName: "jslee Personal Blog",
  manifestShortName: "jsleeBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/lighthouse-dev" },
    { name: "twitter", url: "https://twitter.com/_Lighthouse2" },
    { name: "facebook", url: "https://www.facebook.com/people/Juseung-Lee/100003236867169 " }
  ]
};
