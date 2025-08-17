import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from "./Pages/Layouts/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import NewArrival from "./Pages/NewArrival/NewArrival";
import Contact from './Pages/Contact/Contact.jsx';
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import Login from "./Pages/Login/Login";
import CategoryPage from './Pages/CategoryPage/CategoryPage.jsx';

import './index.css'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

   <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="products" element={<Products />} />
          <Route path="newarrival" element={<NewArrival/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
