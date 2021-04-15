import importAsString from "@reactioncommerce/api-utils/lib/importAsString.js";
import schema from "@reactioncommerce/api-plugin-products/src/schemas/index";

const custom = importAsString("./custom.graphql");

export default [schema, custom]
