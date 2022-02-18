import router from "next/router";
import React from "react";
import moment from "moment";
import { BsBookmark, BsSuitHeart } from "react-icons/bs";

const CardItem = ({ post }: any) => {
  return (
    <article
      key={post.id}
      className="p-4 rounded-m flex flex-col my-2 w-full max-w-lg gap-y-3 bg-white border-b border-gray-400"
    >
      <div className="w-full  items-center justify-start flex gap-x-2 ">
        <img
          src={post.author?.profile_Img}
          className=" w-10 h-10 flex items-center justify-center overflow-hidden rounded-full border border-gray-300"
        />
        <span className="font-mono ">
          {moment(post.createdAt).format("MMM Do Y")}
        </span>
      </div>
      <div className="w-full flex flex-col px-3 items-center justify-center gap-y-1">
        <h1 onClick={() => router.push("/posts/[id]", `/posts/${post.id}`)}   className="text-2xl  w-full text-left font-bold">{post.title}</h1>
        <p className="font-mono text-gray-700 ">
          {post.content.slice(0, 180)}...
        </p>
        <div className="w-full flex items-center justify-between">
          <span className="w-fit text-gray-800 p-1.5 rounded-xl bg-gray-100  border border-gray-400  text-left font-mono">
            #{post.tags}
          </span>
          <div className="flex items-center justify-center gap-x-3">
            <span>
              <BsBookmark className="text-xl text-gray-700 " />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardItem;
