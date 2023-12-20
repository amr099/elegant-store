import styles from "./Cart.module.css";
import money from "../../assets/icons/money.svg";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useMediaQuery } from "react-responsive";
import FlyoutCartItem from "./../../components/FlyoutCart/FlyoutCartItem";

export default function CartSummary() {
    const { cart, total } = useContext(CartContext);
    const isMobile = useMediaQuery({ maxWidth: 769 });
    return (
        <div className={styles.cartContainer}>
            <table>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map((item) =>
                        isMobile ? (
                            <FlyoutCartItem item={item} key={item?.id} />
                        ) : (
                            <CartItem item={item} key={item?.id} />
                        )
                    )}
                </tbody>
            </table>
            <div className={styles.summary}>
                <h6>Cart summary</h6>
                <div className='flexBetween'>
                    <div className='flex'>
                        <input type='checkbox' id='shipping' />
                        <label htmlFor='shipping'>Free shipping</label>
                    </div>
                    <span>$0.00</span>
                </div>

                <div className='flexBetween'>
                    <div className='flex'>
                        <input type='checkbox' id='express' />
                        <label htmlFor='express'>Express shipping</label>
                    </div>
                    <span>+$15.00</span>
                </div>

                <div className='flexBetween'>
                    <div className='flex'>
                        <input type='checkbox' id='pick' />
                        <label htmlFor='pick'>Pick Up</label>
                    </div>
                    <span>%21</span>
                </div>

                <div className='flexBetween'>
                    <span>Subtotal</span>
                    <span>${total}</span>
                </div>
                <div className='flexBetween'>
                    <span className='h7'>Total</span>
                    <span className='h7'>${total + 36}</span>
                </div>
                <Link to='checkout' className='button'>
                    Checkout
                </Link>
            </div>
            <div className={styles.coupon}>
                <h6>Have a coupon?</h6>
                <p>Add your code for an instant cart discount</p>
                <div className='flex'>
                    <img src={money} alt='money' />
                    <input type='text' placeholder='Coupon Code' />
                    <button>Apply</button>
                </div>
            </div>
        </div>
    );
}
