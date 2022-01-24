import React from "react"
import {  Route,  ReactLocation } from "react-location";
import Menu from "./components/Menu";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";

export const routes: Route[] = [

{
        path:"/",
        element:<Homepage/>
},
{
    path:"/menu",
    element:<Menu/>
},
{
    path:"/about",
    element:<About/>
},
{
    path:"/skills",
    element:<Skills/>
},

];

export const location = new ReactLocation();