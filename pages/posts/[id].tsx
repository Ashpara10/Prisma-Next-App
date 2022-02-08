import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { PrismaClient } from '@prisma/client'
import Head from 'next/head';

const prisma = new PrismaClient()

const Post: NextPage = ({ post }: any) => {
    return <div className='w-full flex items-center justify-center p-3'>
        <Head>
            <title>{post.title}</title>
        </Head>
        <article className='flex flex-col items-start justify-center py-6  px-3 w-full max-w-2xl mx-auto mb-16 bg-white rounded-md border border-gray-300 ' >
            <h1 className=' mb-4 text-4xl font-bold tracking-tight text-black px-2   '>{post.title}</h1>
            <span className='text-full text-left px-4 text-lg text-gray-600 font-mono'>{post.tags}</span>
            <p className='text-md text-gray-800 my-2 w-full text-left px-4 font-medium font-mono '>{post.desc}</p>
        </article>
    </div>;
}
export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id }: any = params;
    const post = await prisma.post.findUnique({ where: { id: id } })
    console.log(post);
    return {
        props: {
            post: { title: post?.title, desc: post?.desc, tags: post?.tags, cover: post?.cover, id: post?.id }
        }
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    const postId = await prisma.post.findMany()
    return {
        paths: postId.map(post => {

            return { params: { id: post.id } }
        }),
        fallback: false
    }
}