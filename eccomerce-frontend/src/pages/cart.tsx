import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";
const cartItems = [
  {
    productId: "ewrwrwrw",
    photo:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/l/t/-original-imagtucmkuwggepy.jpeg?q=70",
    name: "Hp",
    price: 23000,
    quantity: 1,
    stock: 2,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;
const Cart = () => {
  const [couponCode, setcouponCode] = useState<string>("");
  const [isValidCouponCode, setisVaildCouponCode] = useState<boolean>(false);
  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (Math.random() > 0.5) setisVaildCouponCode(true);
      else setisVaildCouponCode(false);
    }, 1000);
    return () => {
      clearTimeout(timeOutID);
      setisVaildCouponCode(false);
    };
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
      {cartItems.length > 0 ? (
          cartItems.map((i, idx) => (
            <CartItem
              key={idx}
              cartItem={i}
            />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em>₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setcouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount}off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invaild Coupon Code <VscError />
            </span>
          ))}
        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
