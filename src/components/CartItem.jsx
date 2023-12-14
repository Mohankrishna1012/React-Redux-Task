import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeToCart } from '../Reducers/ProducerSlicer';
import './cart.css'

const CartItem = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className="card mt-2 px-md-5 py-md-4">
                <div className="row g-0">

                    <div className="col-md-6 col-lg-3 cart-img">
                        <img
                            className="card-img-top rounded mx-auto d-block mt-2"
                            src={product.images[0]}
                            alt="..."
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className='sub-title m-0'>Brand: {product.brand}</p>
                            <div>
                                <span className="text-success">Instock :</span>{" "}
                                {product.stock}
                            </div>
                            <div className=" small star  mb-2">
                                Rating  {product.rating}
                            </div>
                            <div>
                                <h6 className="mb-0">Description</h6>
                                <small className="card-text d-block">
                                    {product.description}
                                </small>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-12 col-lg-3 text-end d-flex flex-column justify-content-between">
                        <div className="mx-2">

                            <div className="me-lg-2  pe-lg-4 ">
                            ₹{product.price}
                            </div>
                            
                            <div className="mt-2">
                                <span className="mx-lg-3">

                                    <button className="btn btn-sm btn-outline-dark"
                                        onClick={() => dispatch(decreaseQuantity(product))}
                                        disabled={product.quantity <= 1}>
                                        -
                                    </button>

                                    <span className="mx-2">{product.quantity}</span>
                                    <button className="btn btn-sm btn-outline-dark"
                                        onClick={() => dispatch(increaseQuantity(product))}>
                                        +
                                    </button>

                                </span>
                            </div>
                        </div>
                        <div className="m-3">
                            <button className="btn btn-danger" onClick={() => dispatch(removeToCart(product))} >Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem