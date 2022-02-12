import React, { useState } from "react";

const PostForm = () => {
  const [post, setPost] = useState({ title: "", desc: "" });
  const [tag, setTag] = useState("");
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
    console.log(post, tag);
  };

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
        cover:'https://image.tmdb.org/t/p/original/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg',
        useremail: localStorage.getItem("user"),
      }),
    });
    const data = await res.json();
    console.log({ res: data });
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="bg-white flex flex-col items-start justify-start  p-5 border border-gray-300 rounded-md max-w-3xl min-h-fit gap-y-5">
        <input
          className="bg-red-30 w-full p-2  focus-visible:outline-none min-h-[80px]  resize-none text-4xl font-bold"
          placeholder="New Post Title..."
          name="title"
          value={title}
          onChange={HandleChange}
        />
        <textarea
          className="bg-rd-300 w-full p-3 flex flex-wrap focus-visible:outline-none resize-none text-lg  font-mono"
          placeholder="Description goes here..."
          rows={8}
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
                className="bg-gray-200 p-3 rounded-md  font-mono mx-1"
              >
                #{tag}
              </button>
            );
          })}
        </div>
      </div>
      <button className="p-3 text-white font-mono bg-blue-700 my-2  rounded-md">
        Publish Post
      </button>
    </form>
  );
};

export default PostForm;
