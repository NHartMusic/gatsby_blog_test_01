const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/nicholashart/Desktop/projects/gatsby_blog_test_01/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/nicholashart/Desktop/projects/gatsby_blog_test_01/src/pages/404.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/nicholashart/Desktop/projects/gatsby_blog_test_01/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/nicholashart/Desktop/projects/gatsby_blog_test_01/src/templates/post.js")))
}

