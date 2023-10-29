import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Greet } from "./Greet";
import { Fruit } from "./Fruit";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Nav />
        <br/>
        <br/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/greet" element={<Greet/>} />
            <Route path="/fruit" element={<Fruit/>} />
        </Routes>
        </BrowserRouter>
       
    )
}