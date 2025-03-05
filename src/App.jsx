import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import PopularCourses from "./component/PopularCourses";
import Descreption from "./component/Descreption";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <PopularCourses />
            <Descreption />
        </div>
    );
}

export default App;
