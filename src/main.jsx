import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./layout/Home.jsx";
import AboutUs from "./layout/AboutUs.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/blog' element={<h1>Blog</h1>} />
                    <Route path='/faq' element={<h1>FAQ</h1>} />
                    <Route path='/contact' element={<h1>Contact</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
