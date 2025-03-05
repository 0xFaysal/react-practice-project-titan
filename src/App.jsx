import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import PopularCourses from "./component/PopularCourses";
import Descreption from "./component/Descreption";
import Feature from "./component/Feature";
import Footer from "./component/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <PopularCourses />
            <Descreption />
            <Feature />
            <Footer />
        </div>
    );
}

export default App;
