import { z } from "zod";
export declare const signupinput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
    name?: string | undefined;
}, {
    password: string;
    email: string;
    name?: string | undefined;
}>;
export type SignupType = z.infer<typeof signupinput>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
}, {
    password: string;
    email: string;
}>;
export type SigninType = z.infer<typeof signinInput>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export type CreateBlogType = z.infer<typeof createBlogInput>;
export declare const updateBlogtInput: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    content?: string | undefined;
}, {
    title?: string | undefined;
    content?: string | undefined;
}>;
export type UpdateBlogInput = z.infer<typeof updateBlogtInput>;
