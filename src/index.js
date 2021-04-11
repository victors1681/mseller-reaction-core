import pkg from "../package.json";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "MSeller Core",
    name: "mseller-core",
    version: pkg.version
  });
  console.log("THIS IS THE API OBJECT", app.context)
}
