import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./Pages/Signup.tsx";
import Signin from "./Pages/Signin.tsx";
import Blog from "./Pages/Blog.tsx";
import Blogs from "./Pages/Blogs.tsx";
import PublishBlog from "./Pages/PublishBlog.tsx";
import Layout from "./Layout.tsx";
import Landing from "./Pages/Landing.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/publish" element={<PublishBlog />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
