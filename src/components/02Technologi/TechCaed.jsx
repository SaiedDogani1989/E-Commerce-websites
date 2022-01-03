import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import Swal from 'sweetalert2';
import { addToCart } from '../../Redux/cart/action';
import { getTechCard } from '../../Redux/Technology/action';
import "./technology.css"




const TechCard = () => {


  const { techProducts } = useSelector((state => state.techReducer))
  const dispatch = useDispatch();

  const handleAddToCart = (techProduct) => {
    dispatch(addToCart(techProduct))
    Swal.fire({
      title: "Product added",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      toast: true,
      position: 'top',
    });
  }

  useEffect(() => {
    dispatch(getTechCard())
  }, [dispatch]);

  return (
    <>
      {techProducts && techProducts.map((techProduct) => (
       
            <div key={techProduct.id} className="card col-lg-3" style={{ "width": "18rem" }}>
              <img
                src={techProduct.img}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between mb-3">
                  <div>{techProduct.price}$</div>
                  <div className="p-2 bg-warning text-white">{techProduct.name}</div>
                </div>
                <button onClick={() => handleAddToCart(techProduct)} className="btn btn-outline-success">Add to card</button>
              </div>
            </div>
      ))}
    </>
  );
}

export default TechCard;
