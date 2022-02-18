import React from 'react';
import { NextPage } from 'next'
import PostForm from '../Components/PostForm';

const CreatePost: NextPage = () => {
    return <div className='w-full lg:flex lg:flexcol flex-row items-center justify-center px-2'>
        <PostForm />
        <div className='w-full bg-red-200'>
         hello world
        </div>
    </div>
};

export default CreatePost;
