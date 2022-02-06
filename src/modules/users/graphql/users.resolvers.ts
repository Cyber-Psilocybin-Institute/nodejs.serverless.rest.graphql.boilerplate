import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";
import { GetUsersService } from "../services/GetUsersService";



const usersResolvers = {
  Query: {
    getAllUsers() {
      const getUserService = container.resolve(GetUsersService);
      const users = getUserService.execute();
      return users;
    }
  },
  Mutation: {
    createUser(_, { input }) {
      const createUserService = container.resolve(CreateUserService);
      const user = createUserService.execute(input);
      return user;
    }
  }
};

export default usersResolvers;
