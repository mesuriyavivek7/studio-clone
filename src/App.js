import React from "react";
import './style.scss'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./componets/footer/Footer";
import NavSet from "./componets/navbar/NavSet";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import YouTube from "./pages/youtube/YouTube";
import Contact from "./pages/contact/Contact";
//import albums
import Album1 from "./pages/album/Album1";
import Album2 from "./pages/album/Album2";
import Album3 from "./pages/album/Album3";
import AlbumA from "./pages/album/AlbumA";
import AlbumB from "./pages/album/AlbumB";
import AlbumC from "./pages/album/AlbumC";

import RecentWork from "./pages/recentwork/RecentWork";

function App() {

   const Layout=()=>{
     return(
      <div className="app">
        <NavSet></NavSet>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
     )
   }

   const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
         {
          path:'/',
          element:<Home></Home>
         },
         {
           path:'/about',
           element:<About></About>
         },
         {
           path:'/recentwork',
           element:<RecentWork></RecentWork>
         },
         {
          path:'/youtube',
          element:<YouTube></YouTube>
         },
         {
          path:'/contact',
          element:<Contact></Contact>
         },
         {
          path:'/album1',
          element:<Album1></Album1>
         },
         {
          path:'/album2',
          element:<Album2></Album2>
         },
         {
          path:'/album3',
          element:<Album3></Album3>
         },
         {
          path:'/album-A',
          element:<AlbumA></AlbumA>
         },
         {
          path:'/album-B',
          element:<AlbumB></AlbumB>
         },
         {
          path:'/album-c',
          element:<AlbumC></AlbumC>
         }
      ]
    },
   ])

   return(
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
   )
  
}

export default App;
