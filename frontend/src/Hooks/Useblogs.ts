import { useEffect, useState } from "react";
import axios from "axios";
import { Backend_Url } from "../../config";
const Useblogs = () => {
  // correct way to define the types of the data comming as array from backend in the form of array of objects
  interface blog {
    title: string;
    content: string;
    id: string;
    author: {
      name: string;
    };
  }
  type dataobject = blog[];
  const [loading, setloading] = useState(true);

  const [blogs, setblogs] = useState<dataobject>([]);
  useEffect(() => {
    const fetchblogs = async () => {
      const res = await axios.get(`${Backend_Url}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token"),
        },
      });
      setblogs(res.data.blogs);
      setloading(false);
    };
    fetchblogs();
  }, []);

  return {
    loading,
    blogs,
  };
};

export default Useblogs;
