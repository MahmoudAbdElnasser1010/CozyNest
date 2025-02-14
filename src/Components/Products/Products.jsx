import React, { useEffect } from 'react'
import style from './Products.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { getProducts } from '../../redux/productsSlice';

export default function Products() {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  
  let {products, isLoading} = useSelector((store) => store.productReducer)
  
  return <>
  
  
      {isLoading ? (
        <Loading /> 
      ) : (
        <div className="flex flex-wrap gap-y-4 py-8 justify-center">
          {products.map((product) => (
            <div key={product.id} className="w-1/6 p-4">
              <div className="product p-2 rounded-lg">
                <Link to={`/productdetails/${product.id}`}>
                  <img
                    src={product.imageCover}
                    className="w-full"
                    alt={product.title}
                  />
                  <p className="text-sm text-main">{product.category.name}</p>
                  <h3 className="text-xl">
                    {product.title.split(' ').slice(0, 2).join(' ')}
                  </h3>
                  <div className="flex justify-between">
                    <span>{product.price}</span>
                    <span>
                      <i className="fas fa-star rating-color"></i>
                      {product.ratingsAverage}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => addItemToCart(product.id)}
                  className="btn w-full"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  
  

}


