const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
module.exports = withPlugins([withImages], {
  env: {
    apiBasePath: "https://wisdo-test-react.herokuapp.com",
  },
});