import React from "react";
import logo from "/logo.jpg";
import {GiHamburgerMenu} from "react-icons/gi";
function Navbar() {
    return (
        <nav className='flex justify-between items-center bg-transparent px-12 absolute top-0 left-0 right-0 z-10'>
            <div className='inline-flex items-center gap-2 px-4 py-4'>
                <img src={logo} alt='logo' />
                <h1 className='text-xl font-bold'>LernerPro</h1>
            </div>
            <div>
                <GiHamburgerMenu className='relative md:hidden text-xl' />
                <ul className='hidden md:inline-flex items-center gap-8 text-lg  px-4 py-4'>
                    <li className='active'>Home</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>
                        <button className='btn'>Contact Us</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
