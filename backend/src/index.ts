import { Hono } from "hono";
import { cors } from "hono/cors";
import userRouter from "../routes/user";
import blogRouter from "../routes/blog";
//this is the syntax to define the typeof databaseurl that is string
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
//defining the types
app.use("/*", cors());
app.route("/api/v1/user/", userRouter);
app.route("/api/v1/blog", blogRouter);

//authmiddleware is beig defined here

export default app;
