import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import Swal from 'sweetalert2';
import { addToCart } from '../../Redux/cart/action';
import { getProducts } from "../../Redux/products/action"


const GroceryCard = (props) => {

  const { products } = useSelector((state => state.product))
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    Swal.fire({
      title: "Product added",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 1000,
      toast: true,
      position: 'top',
    });
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <>
      {products && products.map(product => (
        <div key={product.id} className="card col-lg-3" style={{ "width": "18rem" }}>
          <img
            src={product.img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between mb-3">
              <div>{product.price}$</div>
              <div className="p-2 bg-warning text-white">{product.name}</div>
            </div>
            <button onClick={() => handleAddToCart(product)} className="btn btn-outline-success m-1">Add to card</button>
          </div>
        </div>
      ))}

    </>
  );
}

export default GroceryCard;
