/** @format */

import "./card.scss";
import useAuth from "../../Hooks/useAuth"
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useSelector } from "react-redux";

export default function Card({ title, price, id }) {
  const { auth } = useAuth();
  const [cookies, setCookie] = useCookies([]);
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart)

  const addToCart = () => {
    const cartItemsClone = [...cartItems]
    const inThecart = cartItemsClone.filter(item => item.productId === id)
    console.log(inThecart);
    if (inThecart.length > 0) {
      const newCartItems = cartItemsClone.filter(item => item.productId !== id)
      const modifiedProduct = { ...inThecart[0], quantity: inThecart[0].quantity + 1 }
      newCartItems.push(modifiedProduct)
      dispatch(cartActions.setCart(newCartItems))
    } else {
      dispatch(cartActions.addtoCart({
        productId: id,
        quantity: 1
      }))
    }
  }

export default function Card() {
  return (
    <div className="card">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="a1.jpg"
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="flip-card-back">
            <img
              src="a2.jpg"
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />

            <div className="icons">
              <button className="add"> ADD TO CART </button>
              <button className="wish-list"> ❤ </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-title">
        <h3> crystal light </h3>

        <h4> 550$ </h4>
      </div>
    </div>
  );
}
