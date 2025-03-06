import React from "react";
import img1 from "/aboutus1.webp";

import pimg from "/portrait.jpg";
import pimg1 from "/portrait1.jpg";
import pimg2 from "/portrait2.jpg";
import pimg3 from "/portrait3.jpg";
import pimg4 from "/portrait4.jpg";
import pimg5 from "/portrait5.jpg";
import pimg6 from "/portrait6.jpg";
import pimg7 from "/portrait7.jpg";

function AboutUs() {
    return (
        <div className='mt-24 mb-24'>
            <h1 className='text-center text-4xl font-bold uppercase text-gray-800'>
                About us.
            </h1>
            <div className='flex  gap-2 mt-10 px-16 '>
                <div className='flex-1/3 self-center text-left py-14 px-8'>
                    <p className=' text-3xl font-bold p-8 capitalize leading-10 first-letter:text-6xl'>
                        LernerPro , <br />a leading online learning platform.
                    </p>
                </div>
                <div className='flex-2/3  space-y-4 py-14 px-8'>
                    <p className=' text-xl first-letter:text-2xl first-letter:font-semibold'>
                        At LernerPro, we are dedicated to providing high-quality
                        online education that is accessible to everyone. Our
                        platform offers a wide range of courses in various
                        fields, including technology, business, arts, and more.
                        We believe that learning should be an enjoyable and
                        enriching experience, which is why we have designed our
                        courses to be engaging, interactive, and practical.
                    </p>
                    <p className=' text-xl'>
                        Our team consists of experienced educators, industry
                        experts, and technology enthusiasts who are committed to
                        delivering the best possible learning experience.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img
                    src={img1}
                    alt='about us'
                    className='rounded-lg shadow-lg w-[90%] h-90 object-cover object-center'
                />
            </div>
            <div className='my-18'>
                <p className='text-xl font-bold text-center text-primary tracking-widest'>
                    - Our -
                </p>
                <h2 className='font-bold text-4xl text-center'>
                    Awesome Mentors.
                </h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-16  max-w-7xl mx-auto'>
                    <MentorPhoto
                        img={pimg}
                        name='John Doe'
                        position='Lead Instructor'
                    />
                    <MentorPhoto
                        img={pimg1}
                        name='Jane Smith'
                        position='Senior Developer'
                    />
                    <MentorPhoto
                        img={pimg2}
                        name='Alice Johnson'
                        position='Project Manager'
                    />
                    <MentorPhoto
                        img={pimg3}
                        name='Bob Brown'
                        position='UX Designer'
                    />
                    <MentorPhoto
                        img={pimg4}
                        name='Charlie Davis'
                        position='Data Scientist'
                    />
                    <MentorPhoto
                        img={pimg5}
                        name='Diana Evans'
                        position='Marketing Specialist'
                    />
                    <MentorPhoto
                        img={pimg6}
                        name='Ethan Foster'
                        position='Business Analyst'
                    />
                    <MentorPhoto
                        img={pimg7}
                        name='Grace Harris'
                        position='Content Writer'
                    />
                </div>
            </div>
            <div className='bg-about-img py-36 max-w-7xl mx-auto bg-cover  grid place-items-center bg-center bg-no-repeat rounded-lg shadow-lg shadow-gray-500/50'>
                <h4 className='text-center text-2xl font-bold text-primary tracking-widest'>
                    Join us now!
                </h4>
                <h1 className='text-4xl font-bold text-center leading-14 mt-4 text-white'>
                    Become a part of LernerPro and unlock your potential!
                    <br />
                    Start learning today!
                </h1>
                <button className='btn text-xl px-6 mt-16 '>Get Started</button>
            </div>
        </div>
    );
}

function MentorPhoto({img, name, position}) {
    return (
        <div className='group relative cursor-pointer'>
            <img
                src={img}
                alt={name}
                className='h-92 w-66  object-cover object-center   rounded-2xl grayscale-25 brightness-50 group-hover:brightness-100 group-hover:grayscale-0 transition duration-300 ease-in-out shadow-lg shadow-gray-500/50 group-hover:shadow-lg group-hover:shadow-gray-500/50'
            />
            <div className='absolute bottom-1 left-2  pl-2 pb-4 text-white'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='text-primary text-sm font-semibold'>{position}</p>
            </div>
        </div>
    );
}

export default AboutUs;
