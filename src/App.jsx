import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {Outlet} from "react-router";

function App() {
    return (
        <div div className='max-w-8xl mx-auto overflow-x-hidden'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
