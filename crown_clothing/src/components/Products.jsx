import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (cat,filter,sort) => {
 console.log({cat});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [products,setProducts]=useState([]);
  const [filteredProducts,setFilteredProducts] =useState([]);
  console.log(products);
  useEffect(()=>{
    const getProducts = async()=>{
      try{
        const res=await axios.get(cat?`http://localhost:8000/api/products?category=${cat}`:`http://localhost:8000/api/products`);
        console.log(res.data.message);
        setProducts(res.data.message);
      }
      catch(err){
        console.log(err);
      }
    }
    getProducts();
  },[id])

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;