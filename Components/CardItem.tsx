import router from "next/router";
import React from "react";

const CardItem = ({ post }: any): JSX.Element => {
  return (
    <article
      onClick={() => router.push("/posts/[id]", `/posts/${post.id}`)}
      key={post.id}
      className="p-4 rounded-m flex  my-2 w-full max-w-lg bg-white border-b border-gray-400"
    >
      <div className="w-20 flex gap-x-2">
        <img
          src={post.author?.profile_Img}
          className=" w-11 h-11 flex items-center justify-center overflow-hidden rounded-full border border-gray-300"
        />
      </div>
      <div className="w-full flex-col items-center justify-center gap-y-2">
        <h1 className="text-2xl  w-full text-left font-bold">
          {post.title}
        </h1>
        <p className="font-mono text-gray-700 ">{post.content}</p>
        <span className="w-full text-gray-600 my-2 text-left font-mono">
          #{post.tags.toLowerCase()}
        </span>
      </div>
    </article>
  );
};

export default CardItem;
