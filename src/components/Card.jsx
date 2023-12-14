import React from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../Reducers/ProducerSlicer";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.product);

  const isInCart = () => product && cart.some((item) => item.id === product.id);

  const handleClick = () =>
    isInCart() ? dispatch(removeToCart(product)) : dispatch(addToCart(product));

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <img src={product.thumbnail} alt="" />
          <div className="card-body p-4">
          <div className="text-center">
            <div className="row title justify-content-center">
              {product.title}
            </div>
            <div className="row justify-content-center prices">
              ₹{product.price}
            </div>
            <br />
            <div className="row justify-content-center stars"
            style={{textAlign:"center"}}>
              Rating {product.rating}
            </div>
            <br />
            <div className="row justify-content-center">
              <button
                className={
                  isInCart()
                    ? "btn btn-danger mt-auto"
                    : "btn btn-outline-dark mt-auto"
                }
                onClick={handleClick}
              >
                {isInCart() ? "Remove " : "Add to cart"}
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
