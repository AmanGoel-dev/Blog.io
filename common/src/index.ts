import { z } from "zod";

export const signupinput = z.object({
  name: z.string().optional(),
  password: z.string(),
  email: z.string().email(),
});

export type SignupType = z.infer<typeof signupinput>;

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SigninType = z.infer<typeof signinInput>;

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});
export type CreateBlogType = z.infer<typeof createBlogInput>;

export const updateBlogtInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogtInput>;
