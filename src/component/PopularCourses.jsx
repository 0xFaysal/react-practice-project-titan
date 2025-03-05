import React from "react";
import timer from "/timer.svg";
import cover from "/cover.jpeg";

function PopularCourses() {
    return (
        <div className='my-20'>
            <h1 className='font-bold text-center text-3xl'>Popular Courses</h1>
            <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto my-10'>
                <Card
                    img={cover}
                    title='Frontend Development with JavaScript'
                    author='Faysal Ahmed'
                    price={99}
                    duration={4}
                />
                <Card
                    img={cover}
                    title='Frontend Development with React'
                    author='Author Faysal'
                    price={199}
                    duration={6}
                />
                <Card
                    img={cover}
                    title='Full Stack Development with JavaScript'
                    author='Author Faysal'
                    price={399}
                    duration={8}
                />
                <Card
                    img={cover}
                    title='Full Stack Development with MERN'
                    author='Author Faysal'
                    price={599}
                    duration={10}
                />
            </div>
        </div>
    );
}

function Card({img, title, author, price, duration}) {
    return (
        <div className='bg-white rounded-2xl p-4 border-2 border-gray-200 max-w-7xl'>
            <img
                src={img}
                alt='course'
                className='w-full h-50 object-cover object-center rounded-2xl'
            />
            <h2 className='font-bold text-2xl my-3'>{title}</h2>
            <p className='text-gray-500 text-sm'>By {author}</p>
            <div className='inline-flex items-start gap-1 my-3'>
                <img src={timer} alt='timer icon' />
                <p>
                    <strong>Duration: </strong>
                    {duration} week
                </p>
            </div>
            <p className='text-gray-500 text-base  mb-2'>${price} USD</p>
            <button className='btn w-full'>Buy now</button>
        </div>
    );
}

export default PopularCourses;
