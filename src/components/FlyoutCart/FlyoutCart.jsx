import styles from "./FlyoutCart.module.css";
import FlyoutCartItem from "./FlyoutCartItem";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function FlyoutCart({ cart, setCart }) {
    return (
        cart && (
            <div className={styles.flyoutCart}>
                <div>
                    <div className='flexBetween'>
                        <h6>Cart</h6>
                        <img
                            src={close}
                            alt='close'
                            onClick={() => setCart(false)}
                        />
                    </div>
                    <FlyoutCartItem />
                    <FlyoutCartItem />
                    <FlyoutCartItem />
                    <FlyoutCartItem />
                </div>
                <div>
                    <div className='flexBetween'>
                        <span>Subtotal</span>
                        <span>$99.00</span>
                    </div>
                    <div className='flexBetween'>
                        <span>Total</span>
                        <span>$234.00</span>
                    </div>
                    <Link to='/cart/checkout' className='button'>
                        Checkout
                    </Link>
                    <Link to='/cart'>View Cart</Link>
                </div>
            </div>
        )
    );
}
