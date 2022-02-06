import dotenv from "dotenv";

import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { routes } from "./routes";

import resolvers from "./resolvers";
import typeDefs from "./schemas";

dotenv.config();

const PORT = 4003;

mongoose.connect(process.env.MONGODB_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});

const schema = makeExecutableSchema({
  resolvers,
  typeDefs
});

const app = express();

app.use(express.json());

app.use(routes);

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json(error.message);
    }

    return response.status(500).json(error);
  }
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
