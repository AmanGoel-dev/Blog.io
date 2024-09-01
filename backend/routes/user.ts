import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupinput } from "amangoeldev-blog";
import { sign, verify } from "hono/jwt";

const router = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

router.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  //getitng the inputs
  const body = await c.req.json();

  const validation = signupinput.safeParse(body);
  try {
    if (!validation.success) {
      return c.json(
        {
          message: "invalid input types ",
        },
        401
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: validation.data.email,
      },
    });
    if (existingUser) {
      return c.json({
        message: "email already exist please signin",
      });
    }
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      token,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      message: "error while signingup",
    });
  }
});

router.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const validInput = signinInput.safeParse(body);
    if (!validInput.success) {
      return c.json({
        message: "invalid inputs",
      });
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (existingUser == null) {
      return c.json({
        message: "invalid Credenetials",
      });
    }
    const token = await sign({ id: existingUser.id }, c.env.JWT_SECRET);
    return c.json({
      token,
    });
  } catch (error) {
    return c.json({
      message: "error while signing  in ",
    });
  }
});

export default router;
