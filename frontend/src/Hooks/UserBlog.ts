import axios from "axios";
import { useEffect, useState } from "react";
import { Backend_Url } from "../../config";

interface UserBlogparams {
  id: string | undefined;
}
const UserBlog = ({ id }: UserBlogparams) => {
  interface blogprops {
    title: string;
    content: string;
    id: string;
    author: {
      name: string;
    };
  }

  const [loading, isloading] = useState(true);
  const [blog, setblog] = useState<blogprops>({});

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(`${Backend_Url}/api/v1/blog/getblog/${id}`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      setblog(res.data.requiredBlog);
      isloading(false);
      console.log(blog);
    };
    fetchdata();
  }, [id]);

  return {
    loading,
    blog,
  };
};

export default UserBlog;
