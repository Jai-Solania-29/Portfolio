import React from "react"
import {  Route,  ReactLocation } from "react-location";
import Menu from "./components/Menu";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Education from "./components/Education";

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
{
    path:"/tools",
    element:<Tools/>
},
{
    path:"/edu",
    element:<Education/>
},

];

export const location = new ReactLocation();