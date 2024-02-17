import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './navbar/Navbar'
import MainPage from './mainPage/MainPage'
import Products from './productsPage/Products';

export default function Page() {
  return (

    <>
     <Navbar/>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
  )
}
