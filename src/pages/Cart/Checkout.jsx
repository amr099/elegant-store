import styles from "./Cart.module.css";
import FlyoutCartItem from "./../../components/FlyoutCart/FlyoutCartItem";
import money from "../../assets/icons/money.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Checkout() {
    const { cart, total } = useContext(CartContext);
    return (
        <div className={styles.checkout}>
            <form>
                <fieldset>
                    <legend>Contact Information</legend>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' required />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone:</label>
                        <input type='tel' id='phone' name='phone' />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Shipping Information</legend>
                    <div>
                        <label htmlFor='address'>Address:</label>
                        <input id='address' name='address' required></input>
                    </div>
                    <div>
                        <label htmlFor='city'>City:</label>
                        <input type='text' id='city' name='city' required />
                    </div>
                    <div>
                        <label htmlFor='zip'>ZIP Code:</label>
                        <input type='text' id='zip' name='zip' required />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Payment Information</legend>
                    <div>
                        <label htmlFor='card'>Credit Card Number:</label>
                        <input type='text' id='card' name='card' required />
                    </div>
                    <div>
                        <label htmlFor='expiry'>Expiration Date:</label>
                        <input
                            type='text'
                            id='expiry'
                            name='expiry'
                            placeholder='MM/YYYY'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='cvv'>CVV:</label>
                        <input type='text' id='cvv' name='cvv' required />
                    </div>
                </fieldset>

                <button type='submit'>Place Order</button>
            </form>

            <div className={styles.order}>
                <h6>Order summary</h6>
                {cart?.map((item) => (
                    <FlyoutCartItem item={item} key={item?.id} />
                ))}
                <div className='flexBetween'>
                    <input type='text' id='coupon' name='coupon' />
                    <button>Apply</button>
                </div>
                <div className='flexBetween'>
                    <div className='flex'>
                        <img src={money} alt='money' /> <span>JenkateMW</span>
                    </div>
                    <p className={styles.discount}>-$25.00 [Remove]</p>
                </div>
                <div className='flexBetween'>
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className='flexBetween'>
                    <span>Subtotal</span>
                    <span className={styles.bold}>${total}</span>
                </div>
                <div className='flexBetween'>
                    <span className={styles.bold}>Total</span>
                    <span className={styles.bold}>${total - 25}</span>
                </div>
            </div>
        </div>
    );
}
