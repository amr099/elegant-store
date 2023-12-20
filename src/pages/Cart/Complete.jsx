import styles from "./Cart.module.css";
import product from "../../assets/imgs/p-color.png";
import { Link } from "react-router-dom";
export default function Complete() {
    return (
        <div className={styles.complete}>
            <h6>Thank you! 🎉</h6>
            <h4>Your order has been received</h4>

            <div className={`flex ${styles.products}`}>
                <img src={product} alt='p' />
                <img src={product} alt='p' />
                <img src={product} alt='p' />
            </div>

            <div className={styles.info}>
                <div className='flexBetween'>
                    <span>Order code:</span>
                    <span>#0123_45678</span>
                </div>
                <div className='flexBetween'>
                    <span>Date:</span>
                    <span>October 19, 2023</span>
                </div>
                <div className='flexBetween'>
                    <span>Total:</span>
                    <span>$1,345.00</span>
                </div>
                <div className='flexBetween'>
                    <span>Payment method:</span>
                    <span>Credit Card</span>
                </div>
            </div>
            <Link to='/profile/orders'>Purchase History</Link>
        </div>
    );
}
