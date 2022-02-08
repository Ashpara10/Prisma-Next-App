import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'

const PostForm: React.FC = () => {

    const [post, setPost] = useState({ title: '', desc: '' })
    const { title, desc } = post;

    const handleChange = (e: any) => {
        setPost({ ...post, [e.target.name]: e.target.value })
        console.log(post);
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const res = await fetch('/api/hello', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                desc: desc
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        return console.log(data);
    }
    return <div className='w-full flex flex-col items-center justify-evenly gap-y-4 p-4'>
        <form onSubmit={handleSubmit} className='w-full mt-5 font-mono flex flex-col items-center justify-center  gap-y-2'>
            <input name='title' placeholder='Enter Title...' className='w-full bg-white border border-gray-300 rounded-md p-3' value={title} onChange={handleChange} />
            <textarea name='desc' placeholder='Enter Description...' className='w-full bg-white border border-gray-300 rounded-md p-3' value={desc} onChange={handleChange} />
            <button type='submit' className='p-3 bg-blue-700 rounded-md disabled:bg-blue-600 font-medium text-white' disabled={!title || !desc ? true : false} >Publish Post</button>
        </form>
        <Preview Title={title} Desc={desc} />
    </div>
};

export default PostForm;

export const Preview = ({ Title, Desc }: any) => {
    return <article className='flex flex-col  items-start justify-center p-3 w-full max-w-2xl mx-auto mb-16 bg-white rounded-md border border-gray-300 ' >
        <h2 className=' mb-4 text-4xl font-bold tracking-tight text-black px-2  '>{Title}</h2>
        <ReactMarkdown className='font-mono text-lg text-gray-700 my-2 w-full text-left px-3 font-medium'>{Desc}</ReactMarkdown>
    </article>
}