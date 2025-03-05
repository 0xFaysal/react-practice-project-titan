import React from "react";
import logo from "/logo.jpg";
import instagram from "/instagram.svg";
import telegram from "/telegram.svg";
import twitter from "/twitter.svg";
import figma from "/Figma.svg";
import medium from "/Medium.svg";
function Footer() {
    return (
        <footer className='w-full mx-auto flex justify-between items-center bg-gray-100 px-30 py-36'>
            <div>
                <div className='inline-flex items-center gap-2 px-4 py-4'>
                    <img
                        src={logo}
                        alt='logo'
                        className='backdrop-contrast-100'
                    />
                    <h1 className='text-2xl font-bold'>Titan</h1>
                </div>
                <div className='flex gap-4 *:size-10 *:p-1 *:border-2 *:border-gray-200 *:rounded-xl'>
                    <img src={instagram} alt='instagram' />
                    <img src={telegram} alt='telegram' />
                    <img src={twitter} alt='twitter' />
                    <img src={figma} alt='figma' />
                    <img src={medium} alt='medium' />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <h1 className='font-bold text-2xl'>Products</h1>
                    <ul className='space-y-2 mt-2 text-lg'>
                        <li>Courses</li>
                        <li>Mentorship</li>
                        <li>Community</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Resources</h1>
                    <ul className='space-y-2 mt-2 text-lg'>
                        <li>Career</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>Company</h1>
                    <ul className='space-y-2 mt-2 text-lg'>
                        <li>QA</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
