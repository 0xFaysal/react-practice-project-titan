import React from "react";
import Hero from "./../component/Hero";
import PopularCourses from "./../component/PopularCourses";
import Descreption from "./../component/Descreption";
import Feature from "./../component/Feature";

function Home() {
    return (
        <>
            <Hero />
            <PopularCourses />
            <Descreption />
            <Feature />
        </>
    );
}

export default Home;
