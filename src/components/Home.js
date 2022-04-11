import React, { useState, useEffect } from 'react';
import Product from "./Product";
import axios from 'axios';
import Navigation from './Navigation';
import ProductsTable from './ProductsTable';
import Dialog from './Dialog';

const Home = () => {
    const [products, setProducts] = useState([]);
    const API_URL = 'http://localhost:8000/api/';

  useEffect(()=> {
    getAllProducts();
  })

  const getAllProducts = async () => {
    axios.get(`${API_URL}products`).then((response) => {
      setProducts(response.data);
    }).catch((err) => {
      console.log(err);
    })
  };
    return(
        <div className='App'>
            <Navigation />
            <ProductsTable products={products}/>
        </div>
    )
}

export default Home;