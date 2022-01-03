import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { clearCart, decrement, increment, removeFromCart } from "../../Redux/cart/action";

const ShoppingCart = () => {
    const { cart } = useSelector((state => state.shoppingCart));
    const dispatch = useDispatch();

    const handleIncrement = (productId) => {
        dispatch(increment(productId))
        Swal.fire({
            title: "Cart Updated",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    const handleDecrement = (productId) => {
        dispatch(decrement(productId))
        Swal.fire({
            title: "Cart Updated",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
        Swal.fire({
            title: "Cart Updated",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1000,
            toast: true,
            position: 'top',
        });
    }

    const handleClearCart = () => {
        dispatch(clearCart())
        Swal.fire({
            title: "Cart Empty",
            icon: "warning",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1000,
            toast: true,
            position: 'top',
        });
    }

    return (
        <>
            {cart.length === 0 ? (
                <div className="col-md-12 text-center">
                    <div>
                        <i className="bi bi-basket-fill" style={{ fontSize: '100px' }}></i>
                    </div>
                    <h3 className="text-bold">Cart is empty</h3>
                    <Link className="btn btn-outline-dark mt-3" to="/">Products</Link>
                </div>
            ) : (
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 pl-3 pt-3">
                            <table className="table table-hover border bg-white">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th style={{ width: '10%' }}>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart && cart.map(product => (
                                        <tr key={product.id}>
                                            <td className="align-middle">
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-6 col-sm-6">
                                                        <img
                                                            src={product.img}
                                                            alt="..."
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <h5> {product.name} </h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">{product.price}$</td>
                                            <td className="align-middle">
                                                <div className="d-flex flex-row justify-content-between">
                                                    <button onClick={() => handleIncrement(product.id)} className="btn btn-sm btn-dark me-2">
                                                        +
                                                    </button>
                                                    <span>{product.qty}</span>
                                                    <button onClick={() => handleDecrement(product.id)} className="btn btn-sm btn-dark ms-2">
                                                        -
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="align-middle">{parseFloat(product.price * product.qty).toFixed(2)}$</td>
                                            <td className="align-middle" style={{ width: '15%' }}>
                                                <button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-danger btn-sm">delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>
                                            <button onClick={() => handleClearCart()} className="btn btn-dark">Clear Cart</button>
                                        </td>
                                        <td colSpan="3" className="hidden-xs"></td>
                                        <td>
                                            <a href="/login" className="btn btn-success btn-block">Checkout</a>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default ShoppingCart;