import React from "react";
import img1 from "/averter1.png";
import img2 from "/averter2.png";
import img3 from "/averter3.png";
import img4 from "/averter4.png";
import img5 from "/averter5.png";
import star from "/star.svg";
import people from "/people.svg";
import clipboard from "/clipboard.svg";

function Hero() {
    return (
        <>
            <div className="h-screen w-full bg-[url('/hero_bg.png')] bg-cover bg-center bg-no-repeat">
                <div className='flex flex-col justify-center items-center h-full w-1/2 mx-auto text-center leading-4 z-10'>
                    <h1 className='text-7xl text-text-primary font-bold mb-4 leading-tight'>
                        Where the joy of <br /> learn meets the power of
                        community
                    </h1>
                    <p className='text-lg text-text-secondary mb-8'>
                        Dive deep in immersive, interactive small groups. Expand
                        horizons, engage in discussions, and elevate your
                        learning journey with us.
                    </p>
                    <button className='btn text-2xl px-6 '>Get Started</button>
                </div>
                <div className='*:rounded-full *:size-13  absolute w-full h-full top-0 left-0 -z-1'>
                    <img
                        src={img1}
                        alt='averter Image'
                        className='absolute top-32 left-[79%]'
                    />
                    <img
                        src={img2}
                        alt='averter Image'
                        className='absolute top-62 left-[15%]'
                    />
                    <img
                        src={img3}
                        alt='averter Image'
                        className='absolute top-62 left-[90%]'
                    />
                    <img
                        src={img4}
                        alt='averter Image'
                        className='absolute top-145 left-[80%]'
                    />
                    <img
                        src={img5}
                        alt='averter Image'
                        className='absolute top-140 left-[12%]'
                    />
                </div>
                <div className='absolute top-30 left-100 flex items-center gap-2  bg-gray-200 px-1.5 py-1 rounded-2xl font-bold text-sm'>
                    <img src={star} alt='star' />
                    <p>4.9</p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4 max-w-7xl mx-auto my-3'>
                <Card
                    title='Interactive Learning'
                    desc='Dive deep into subjects with hands-on experiences and real-time feedback.'
                    img={clipboard}
                />
                <Card
                    title='Community Support'
                    desc='Join a vibrant community of learners and mentors to enhance your journey.'
                    img={people}
                />
                <Card
                    title='Expert Guidance'
                    desc='Learn from industry leaders and seasoned professionals in your field.'
                    img={star}
                />
            </div>
        </>
    );
}

function Card({title, desc, img}) {
    return (
        <div className='flex flex-col justify-center items-center bg-black text-white rounded-2xl shadow-lg px-6 py-4'>
            <img src={img} alt='icon' className='w-16 h-16 mb-4' />
            <h2 className='text-2xl font-bold mb-2'>{title}</h2>
            <p className=' text-center text-sm'>{desc}</p>
        </div>
    );
}

export default Hero;
