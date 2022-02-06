import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

const mergePath = loadFilesSync(path.join(__dirname, "modules/**/*.resolvers.ts"));

const resolvers = mergeResolvers(mergePath);

export default resolvers;

// doc: https://www.graphql-tools.com/docs/schema-merging
