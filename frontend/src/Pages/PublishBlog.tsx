import axios from "axios";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Backend_Url } from "../../config";
import { useNavigate } from "react-router-dom";

const PublishBlog = () => {
  const [content, setcontent] = useState<string>("");
  const [title, settitle] = useState<string>("");
  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill>(null);
  const handlesubmit = async () => {
    const blogpost = {
      title,
      content,
    };
    try {
      const blog = await axios.post(`${Backend_Url}/api/v1/blog`, blogpost, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      if (blog.status === 200) {
        settitle("");
        setcontent("");
        navigate(`/blog/${blog.data.id}`);
      } else {
        alert("failed to save the blog post");
      }
    } catch (error) {
      alert("an error while saving the blog post");
    }
  };
  return (
    <div className="flex items-center  h-[35rem]   flex-col mt-8">
      <div className=" w-[50rem]">
        <input
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="Enter blog title"
          className=" p-2 mb-4 border rounded w-full "
        />
      </div>

      <ReactQuill
        ref={quillRef}
        className=" w-[50rem]  h-[24rem]"
        theme="snow"
        value={content}
        onChange={setcontent}
      />
      <button
        onClick={handlesubmit}
        type="button"
        className="text-white  mt-16 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
      >
        Publish
      </button>
    </div>
  );
};

export default PublishBlog;
