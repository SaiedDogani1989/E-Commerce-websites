import React, { useEffect } from 'react';
import { addToCart } from '../../Redux/cart/action';
import { getClothCard } from '../../Redux/Cloths/action';
import { useSelector, useDispatch } from "react-redux"
import Swal from 'sweetalert2';




const ClothCard = (props) => {

    const { clothProducts } = useSelector((state => state.clothReducer))
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
        dispatch(getClothCard())
    }, [dispatch]);


    return (
        <>
            {clothProducts && clothProducts.map((clothProduct) => (
                <div key={clothProduct.id} className="card col-lg-3" style={{ "width": "18rem" }}>
                    <img
                        src={clothProduct.img}
                        className="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <div className="d-flex flex-row justify-content-between mb-3">
                            <div>{clothProduct.price}$</div>
                            <div className="p-2 bg-warning text-white">{clothProduct.name}</div>
                        </div>
                        <button onClick={() => handleAddToCart(clothProduct)} class="btn btn-outline-success">Add to card</button>
                    </div>
                </div>
            ))
            }
        </>

    );
}

export default ClothCard;