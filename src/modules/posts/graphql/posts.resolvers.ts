import { container } from "tsyringe";
import { CreatePostService } from "../services/CreatePostService";
import { GetPostByUserService } from "../services/GetPostByUserService";

const usersResolvers = {
  Query: {
    getPostByUser(_, { userID }) {
      const getPostByUserService = container.resolve(GetPostByUserService);
      const posts = getPostByUserService.execute(userID);
      return posts;
    }
  },
  Mutation: {
    createPost(_, { input }) {
      const createPostService = container.resolve(CreatePostService);
      const post = createPostService.execute(input);
      return post;
    }
  }
};

export default usersResolvers;
