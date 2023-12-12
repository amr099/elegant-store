import styles from "./Cart.module.css";
import cartItem from "../../assets/imgs/p-color.png";
import money from "../../assets/icons/money.svg";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";

export default function CartSummary() {
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
                    <tr>
                        <td>
                            <div className='flex'>
                                <img src={cartItem} alt='cartItem-img' />
                                <div className={styles.col}>
                                    <span className={styles.name}>
                                        Tray Table
                                    </span>
                                    <span className={styles.color}>
                                        Color: Black
                                    </span>
                                    <img src={close} alt='close' />
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type='number' />
                        </td>
                        <td className={styles.price}>$19.00</td>
                        <td className={styles.sub}>$38.00</td>
                    </tr>
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
                    <span className={styles.bold}>$1234.00</span>
                </div>
                <div className='flexBetween'>
                    <span className={styles.bold}>Total</span>
                    <span className={styles.bold}>$1345.00</span>
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
