import React, { useContext, useEffect } from 'react'
import { CartItems } from '../../context/CartItems'
import { Link } from 'react-router-dom';

const Product = () => {
  const {myData , fetchProduct} = useContext(CartItems);

  useEffect(()=>{
    fetchProduct();
  },[]);

  return (
     <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
          <div className="flex flex-wrap -m-4" bis_skin_checked="1">
            {myData.map((product) =>{
              const {id , name , price , image , category} = product;
              return (
                <div className="lg:w-1/4 md:w-1/2 shadow-lg p-4 mb-2 w-full" key={id} bis_skin_checked="1">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
              </a>
              <div className="mt-4" bis_skin_checked="1">
                <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{category}</h3>
                <h2 className="text-gray-900 title-font text-lg uppercase font-medium">{name}</h2>
                <p className="mt-1">${price}</p>
                <Link className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-5" to={`/Singleproduct/${id}`}>View Product</Link>
              </div>
            </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
