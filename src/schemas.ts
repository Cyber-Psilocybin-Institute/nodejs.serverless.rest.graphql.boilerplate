import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const mergePath = loadFilesSync(path.join(__dirname, "modules/**/*.graphql"));

const typeDefs = mergeTypeDefs(mergePath);

export default typeDefs;

// doc: https://www.graphql-tools.com/docs/schema-merging
