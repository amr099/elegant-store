import styles from "./FlyoutCart.module.css";
import FlyoutCartItem from "./FlyoutCartItem";
import close from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// eslint-disable-next-line react/prop-types
export default function FlyoutCart({ flycart, setFlyCart }) {
    const { cart, total } = useContext(CartContext);

    return (
        flycart && (
            <div className={styles.flyoutCart}>
                <div>
                    <div className='flexBetween'>
                        <h6>Cart</h6>
                        <img
                            src={close}
                            alt='close'
                            onClick={() => setFlyCart(false)}
                        />
                    </div>
                    {cart?.map((item) => (
                        <FlyoutCartItem key={item?.id} item={item} />
                    ))}
                </div>
                <div>
                    <div className='flexBetween'>
                        <span>Subtotal</span>
                        <span>${total}</span>
                    </div>
                    <div className='flexBetween'>
                        <span>Total</span>
                        <span>${total + 30}</span>
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
