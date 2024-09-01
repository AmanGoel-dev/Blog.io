import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
  signinInput,
  signupinput,
  createBlogInput,
  updateBlogtInput,
} from "amangoeldev-blog";
import { sign, verify } from "hono/jwt";
import { use } from "hono/jsx";

const router = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

router.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json(
      {
        message: "unauthorized token",
      },
      404
    );
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = await verify(token, c.env.JWT_SECRET);

    if (!payload.id) {
      return c.json(
        {
          message: "unauthorized",
        },
        404
      );
    }
    c.set("jwtPayload", payload.id);
    await next();
  } catch (error) {
    return c.json(
      {
        message: "unauthorized",
      },
      401
    );
  }
});

router.post("/", async (c) => {
  const userId = c.get("jwtPayload");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ error: "invalid input" });
    }
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json(
      {
        id: blog.id,
      },
      200
    );
  } catch (error) {
    return c.json({
      message: "unexpected error occur",
    });
  }
});

router.put("/", async (c) => {
  const userId = c.get("jwtPayload");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const { success } = updateBlogtInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ error: "invalid input" });
    }
    const updatedBlog = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      message: " blog updated successfully",
    });
  } catch (error) {
    return c.json({
      message: "unable to update the blog",
    });
  }
});

router.get("/getblog/:id", async (c) => {
  console.log("here");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");
  console.log(id);

  try {
    const requiredBlog = await prisma.post.findUnique({
      where: {
        id: id,
      },
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!requiredBlog) {
      return c.json({
        message: "No blog with this id exist",
      });
    }
    return c.json({
      requiredBlog,
    });
  } catch (error) {
    return c.json({
      message: "Error occured during fetching blog ",
    });
  }
});

router.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      blogs,
    });
  } catch (error) {
    return c.json(
      {
        message: "unable to fetch the blogs",
      },
      401
    );
  }
});

export default router;
