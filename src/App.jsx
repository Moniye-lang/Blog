import React from "react";
import Navbar from "./navbar/navbar";
import { Route,Routes } from "react-router-dom";
// import MainBlog from "./blog/mainBlog";
import Blogshow from "./More on/Blogshow";
import Foot from "./footer/footer";
import MainHome from "./homepage/mainHome";
import Blogdets from './blogdetails/Blogdets'
import Error from "./404/error";
import Blog from "./blog/Blog";

export default function App(){

  return(
    <div>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<MainHome/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/Blogshow' element={<Blogshow/>}></Route>
    <Route path='/blog/:blogdataId' element={<Blogdets/>}></Route>
    <Route path='*' element={<Error/>}></Route>
    </Routes>
    <Foot></Foot>
    </div>
  )
}