import React, { useEffect } from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { setTotal } from '../Reducers/ProducerSlicer'

const Cart = () => {

  const { cart,total } = useSelector(state => state.product)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setTotal());
  }, [cart, dispatch]);

  return (
    <>

      <div className="container-fluid cart-items">
        <div className="row">
          <div className="col-lg-8 col-md-6 card-left">
            {cart.length > 0 ? (
              <div className="list-group list-group-numbered">
                {cart.map((item, index) => (
                  <CartItem
                    key={index}
                    product={item}
                  />
                ))}
              </div>
            ) : (
              <h3>No Items In Cart</h3>
            )}
          </div>
          <div className="col-lg-4 col-md-6 card-left">
            <div className="card total-card">
              <div className="total-head">PRICE DETAILS</div><hr />
              <div className="total-text">Discounts <span>Per Order 10%</span></div>
              <div className="total-text">Delivery Charges <span>₹100</span></div><hr />
              <div className="total-amount"><h6>Total Amount <span>₹{total}</span> </h6></div><hr />
              <div className="total-off">You will save 25% on this order</div>
            </div>
            <div className="order-btn">
              <button className='order'>PLACE YOUR ORDER</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart