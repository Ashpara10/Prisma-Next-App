import React from "react";
import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import prisma from "../../lib/prisma";
import { VscBell, VscBookmark, VscGear, VscHeart } from "react-icons/vsc";

const Post: NextPage = ({ post }: any) => {
  const { title, content, cover, tags, author } = post;
  const { username, profile_Img } = author;
  return (
    <div className="w-full flex items-center justify-center p-3">
      <Head>
        <title>{title}</title>
      </Head>
      <article className="flex flex-col items-start p-3 justify-center overflow-hidden gap-y-3 max-w-2xl mx-auto  bg-white rounded-md  border-gray-300 ">
        <div className="w-full flex gap-x-2 items-center justify-start  ">
          <img src={profile_Img} className="rounded-full w-12" />
          <span className="font-mono text-lg">{username}</span>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <h1 className=" text-4xl font-bold tracking-tight text-black break-words  ">
            {title}
          </h1>
          <span className="text-full text-left p-2 rounded-md ml-2 text-lg text-gray-800  font-mono">
            #{tags}
          </span>
          <img src={cover} className="w-full rounded-md " />
          <p className="font-serif text-black my-2 w-full text-lg  ">
            {content}
          </p>
        </div>
      </article>
      <div className="bg-white border-r overflow-hidden border-gray-300  h-screen p-2 flex z-0 flex-col items-center justify-between   fixed top-[59px] bottom-0  left-0">
        <ul className="flex flex-col gap-x-3 text-2xl  text-gray-600 ">
          <li className="p-3">
            <VscHeart />
          </li>
          <li className="p-3">
            <VscBell />
          </li>
          <li className="p-3">
            <VscBookmark />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id }: any = params;
  const res = await fetch(`http://localhost:3000/api/post/${id}`);
  const post = await res.json();
  console.log(post);
  return {
    props: {
      post,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const postId = await prisma.post.findMany();
  return {
    paths: postId.map((post) => {
      return { params: { id: post.id } };
    }),
    fallback: false,
  };
};
