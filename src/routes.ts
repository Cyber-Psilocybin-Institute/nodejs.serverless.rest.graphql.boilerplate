import { GetPostsByUserController } from "@modules/posts/controllers/GetPostsByUserController";
import { CreateUserController } from "@modules/users/controllers/CreateUserController";
import { Router } from "express";

const routes = Router();

const getPostsByUserController = new GetPostsByUserController();
const createUserController = new CreateUserController();

routes.post('/users', createUserController.handle);
routes.get('/posts/user/:userID', getPostsByUserController.handle);

export { routes }
