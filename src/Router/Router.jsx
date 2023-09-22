import React from 'react'
import {Routes , Route} from "react-router-dom";
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Components/Hero/Hero'
import Product from '../Components/Product/Product';
import Singleproduct from '../Components/SingleProduct/Singleproduct';


const Router = () => {
  return (
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   <Route path='/product' element={<Product/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/singleproduct/:id' element={<Singleproduct/>}></Route>
   </Routes>
  )
}

export default Router
