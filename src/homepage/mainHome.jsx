import React from "react";
import Highlight from "./Highlight";
import Recents from "./recentpost";
import Pop from "./Popular";
import Home from "./Home";

export default function MainHome(){
    
    return(
        <div>
    <Home></Home>
    <Highlight></Highlight>
    <Recents></Recents>
    <Pop></Pop>
        </div>
    )
}