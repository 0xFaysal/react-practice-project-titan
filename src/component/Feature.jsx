import React from "react";
import img1 from "/retro_computer.png";
import img2 from "/Community.png";
import img3 from "/GroupChat.png";

function Feature() {
    return (
        <div className=' max-w-full my-16'>
            <div className=' max-w-7xl mx-auto my-8 space-y-8'>
                <Card
                    img={img1}
                    title='Explore topics'
                    description='Dive deep into our diverse catalog featuring a curated selection of courses in the realms of arts and writing. Experience knowledge crafted by experts, designed to inspire and nurture your creative journey.'
                />
                <Card
                    img={img2}
                    title='Join a community'
                    description='Connect with a vibrant community of learners and mentors, all eager to share their insights and experiences. Engage in discussions, seek advice, and collaborate on projects to enhance your learning journey.'
                />
                <Card
                    img={img3}
                    title='Chat with peers'
                    description='Engage in real-time discussions with fellow learners, share your thoughts, and seek guidance. Our platform fosters a collaborative environment where you can learn from each other and grow together.'
                />
            </div>
        </div>
    );
}

function Card({img, title, description}) {
    return (
        <div className=' flex  items-center justify-center gap-8 w-full  p-4 rounded-lg shadow-sm'>
            <img
                src={img}
                alt='card'
                className='size-60 object-cover rounded-lg mb-4'
            />
            <div className='w-1/2'>
                <h2 className='text-2xl font-bold mb-2  '>{title}</h2>
                <p className='text-gray-600 '>{description}</p>
            </div>
        </div>
    );
}

export default Feature;
