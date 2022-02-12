import React from 'react';
import { NextPage } from 'next'
import PostForm from '../Components/PostForm';

const CreatePost: NextPage = () => {
    return <div className='w-full flex items-center justify-center px-2'>
        <PostForm />
    </div>
};

export default CreatePost;
