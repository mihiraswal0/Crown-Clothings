import React from 'react'
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          quos fugit inventore, cumque quae corporis ratione tenetur eos
          voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
          asperiores repudiandae assumenda quidem.
        </p>
      </div>
     
      {/* =================== Products Start here ================= */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
       <ProductCard/>
      </div>
      {/* =================== Products End here =================== */}
    </div>
  );
};

export default Products;