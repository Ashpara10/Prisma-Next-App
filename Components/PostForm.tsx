import React, { useState } from "react";
import { BsPlus, BsPlusLg } from "react-icons/bs";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", desc: "" });
  const [tag, setTag] = useState("");
  const [image, setImage] = useState();
  const { title, desc } = post;

  let tags = [
    "General",
    "Entertainment",
    "Gaming",
    "Productivity",
    "Ideas",
    "Tech",
    "Coding",
    "Anime",
    "News",
  ];

  const HandleChange = (e: any) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const token =
    typeof window !== "undefined" && localStorage.getItem("AuthToken");

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/createpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: desc,
        tag: tag,
        cover: "image",
        userId: token,
      }),
    });
    const data = await res.json();
    console.log({ res: data });
  };

  return (
    <form onSubmit={HandleSubmit} className="w-full py-3">
      <div className=" flex flex-col font-mono items-center justify-start p-3   w-full min-h-fit gap-y-3">
        <input
          className=" w-full p-2 focus-visible:outline-none text-gray-900 border border-gray-300 rounded-md  text-md "
          placeholder=" Title Goes Here..."
          name="title"
          value={title}
          onChange={HandleChange}
        />
        {image && <img src={image} className=" w-full rounded-md" />}

        <input
          type="url"
          className="w-full p-2 font-heading focus-visible:outline-none text-gray-900 border border-gray-300 rounded-md  "
          onChange={(e: any) => setImage(e.target.value)}
        />

        <textarea
          className=" w-full border border-gray-300 text-gray-800 p-3 flex rounded-md flex-wrap focus-visible:outline-none  text-md "
          placeholder="Description goes here..."
          // rows={8}
          name="desc"
          value={desc}
          onChange={HandleChange}
        />
        <div className="flex flex-wrap gap-y-2">
          {tags.map((tag) => {
            return (
              <button
                type="button"
                key={tag}
                value={tag}
                onClick={(e: any) => {
                  setTag(e.target.value);
                }}
                className="border border-gray-300 p-2 rounded-md focus-within:bg-gray-200 font-mono mx-1"
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center font-mono gap-x-2">
      <button className="p-3 text-center text-white  bg-blue-700  rounded-md">
        Publish Post
      </button>
      <button className="p-3 text-black bg-gray-400 rounded-md  ">Save as Draft</button>
      </div>
    </form>
  );
};

export default PostForm;
