import React from 'react';
import { ProductContext} from './Hook/ProductContext';
import {Routes, Route} from 'react-router-dom'
import Layout from './Components/Layout';
import Home from './Components/Main/Home/Home';
import About from './Components/Main/About/About';
import Reviews from './Components/Main/Reviews/Reviews';
import ShoppingBasket from './Components/Main/ShoppingBasket/ShoppingBasket';
import PageHasNotFound from './Components/PageHasNotFound';
import ImageOfProduct from './Components/Main/Home/Product_List/ImageOfProduct';

export const App:React.FC = () => {

  return (
    <ProductContext>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='basket' element={<ShoppingBasket/>}></Route>
          <Route path='reviews' element={<Reviews/>}></Route>
          <Route path='img' element={<ImageOfProduct/>}></Route>
          <Route path='*' element={<PageHasNotFound/>}></Route>
        </Route>
      </Routes>
    </ProductContext>
    
  )
}

export default App;
