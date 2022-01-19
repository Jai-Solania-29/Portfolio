import React from "react"
import {  Route,  ReactLocation } from "react-location";
import About from "./components/About";
import Homepage from "./components/Homepage";

export const routes: Route[] = [

{
        path:"/",
        element:<Homepage/>

},
{
    path:"/about",
    element:<About/>

},

];

export const location = new ReactLocation();