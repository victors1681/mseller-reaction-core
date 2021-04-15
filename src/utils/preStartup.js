import { extendProductSchemas } from "../simpleSchemas.js";

export default async function productPreStartup(context) {
    console.log("context.simpleSchemas", context.simpleSchemas)
    extendProductSchemas(context.simpleSchemas);
}