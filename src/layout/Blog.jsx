import React from "react";

import {GoArrowUpRight} from "react-icons/go";

import pic1 from "/blog (1).jpg";
import pic2 from "/blog (2).jpg";
import pic3 from "/blog (3).jpg";
import pic4 from "/blog (4).jpg";
import pic5 from "/blog (5).jpg";
import pic6 from "/blog (6).jpg";
import pic7 from "/blog (7).jpg";
import pic8 from "/blog (8).jpg";
import pic9 from "/blog (9).jpg";
import pic10 from "/blog (10).jpg";
import pic11 from "/blog (11).jpg";

function Blog() {
    return (
        <div className='my-24 max-w-7xl mx-auto'>
            <h2 className='text-2xl font-bold my-4'>Recent blog posts</h2>
            <div className='flex w-full gap-4 '>
                <div className='flex-1/2 hidden md:block'>
                    <BlogCard1
                        imgSrc={pic1}
                        author='John Doe'
                        time='2 hours ago'
                        title='Understanding React Hooks'
                        description='A deep dive into the world of React Hooks and how they can simplify your code. 
                        This is the best feature of the React Js and some new hooks are add in new version of react js. '
                        tags={["React", "JavaScript", "Web Development"]}
                    />
                </div>
                <div className='grid grid-cols-1'>
                    <BlogCard2
                        imgSrc={pic2}
                        author='Jane Smith'
                        time='3 hours ago'
                        title='CSS Grid vs Flexbox'
                        description='A comparison of CSS Grid and Flexbox, and when to use each layout method.'
                        tags={["CSS", "Web Design"]}
                    />
                    <BlogCard2
                        imgSrc={pic3}
                        author='Alice Johnson'
                        time='4 hours ago'
                        title='JavaScript ES6 Features'
                        description='An overview of the new features introduced in ES6 and how they can improve your code.'
                        tags={["JavaScript", "ES6"]}
                    />
                    <BlogCard2
                        imgSrc={pic4}
                        author='Bob Brown'
                        time='5 hours ago'
                        title='Building RESTful APIs with Node.js'
                        description='A guide to building RESTful APIs using Node.js and Express.This is the best feature of the Node.js and some new features are add in new version of node.js.'
                        tags={["Node.js", "Express", "API"]}
                    />
                </div>
            </div>
            <h2 className='text-2xl font-bold mt-20 mb-10'>All blog posts</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <BlogCard1
                    imgSrc={pic5}
                    author='Charlie Davis'
                    time='6 hours ago'
                    title='Introduction to TypeScript'
                    description='An introduction to TypeScript and how it can help you write better JavaScript code.'
                    tags={["TypeScript", "JavaScript"]}
                />
                <BlogCard1
                    imgSrc={pic6}
                    author='Diana Evans'
                    time='7 hours ago'
                    title='Understanding Asynchronous JavaScript'
                    description='A deep dive into asynchronous programming in JavaScript and how to handle callbacks, promises, and async/await.'
                    tags={["JavaScript", "Async"]}
                />
                <BlogCard1
                    imgSrc={pic7}
                    author='Ethan Foster'
                    time='8 hours ago'
                    title='Web Accessibility Best Practices'
                    description='A guide to making your web applications accessible to all users, including those with disabilities.'
                    tags={["Accessibility", "Web Design"]}
                />
                <BlogCard1
                    imgSrc={pic8}
                    author='Grace Harris'
                    time='9 hours ago'
                    title='Getting Started with GraphQL'
                    description='An introduction to GraphQL and how it differs from REST APIs.'
                    tags={["GraphQL", "API"]}
                />
                <BlogCard1
                    imgSrc={pic9}
                    author='John Doe'
                    time='10 hours ago'
                    title='CSS Animations and Transitions'
                    description='A guide to creating smooth animations and transitions using CSS.'
                    tags={["CSS", "Animations"]}
                />
                <BlogCard1
                    imgSrc={pic10}
                    author='Jane Smith'
                    time='11 hours ago'
                    title='Building Single Page Applications with React'
                    description='A guide to building single-page applications using React and React Router.'
                    tags={["React", "SPA"]}
                />
            </div>
        </div>
    );
}

function BlogCard1({imgSrc, author, time, title, description, tags}) {
    return (
        <div className=' p-2 space-y-2 '>
            <img src={imgSrc} alt='' />
            <div className='flex justify-between items-center'>
                <p className='text-sm text-gray-600 font-semibold'>
                    {author} • {time}
                </p>
                <GoArrowUpRight className='text-3xl font-bold' />
            </div>
            <h2 className='text-2xl font-bold text-black'>{title}</h2>
            <p className='text-base'>{description}</p>
            <div className='flex gap-1.5'>
                {tags?.map((tag, index) => (
                    <span
                        key={index}
                        className='rounded-4xl border-2 font-semibold border-gray-500 text-gray-500 px-2 py-1 text-xs '
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
function BlogCard2({imgSrc, author, time, title, description, tags}) {
    return (
        <div className='flex p-2 gap-2'>
            <img
                src={imgSrc}
                alt=''
                className='w-50 h-45 object-center object-cover'
            />
            <div className='space-y-2.5'>
                <p className='text-sm text-gray-600 font-semibold'>
                    {author} • {time}
                </p>
                <h2 className='text-2xl font-bold text-black'>{title}</h2>
                <p className='max-w-lg'>{description}</p>
                <div className='flex gap-1.5'>
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className='rounded-4xl border-2 font-semibold border-gray-500 text-gray-500 px-2 py-1 text-xs '
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
