import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  getUsers,
  updateUser,
  createUser,
  deleteUser,
} from "./user.ts";

export const userRouter = new Router();

userRouter.get("/api/users/", getUsers);
userRouter.post("/api/users/", createUser);
userRouter.put("/api/users/:id", updateUser);
userRouter.delete("/api/users/:id", deleteUser);