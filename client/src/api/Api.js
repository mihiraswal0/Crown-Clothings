import axios from 'axios';
export async function productsData(){
    const product=await axios.get("https://fakestoreapi.com/products");
    return product;
}