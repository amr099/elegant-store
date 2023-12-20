import styles from "./Home.module.css";
import lock from "../../assets/icons/lock.svg";
import delivery from "../../assets/icons/delivery.svg";
import money from "../../assets/icons/money.svg";
import phone from "../../assets/icons/phone.svg";

export default function Cards() {
    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src={delivery} alt='delivery' />
                <h6 className='h7'>Free Shipping</h6>
                <span>Order above $200</span>
            </div>
            <div className={styles.card}>
                <img src={money} alt='money' />
                <h6 className='h7'>Money-back</h6>
                <span>30 days guarantee</span>
            </div>
            <div className={styles.card}>
                <img src={lock} alt='lock' />
                <h6 className='h7'>Secure Payments</h6>
                <span>Secured by Stripe</span>
            </div>
            <div className={styles.card}>
                <img src={phone} alt='phone' />
                <h6 className='h7'>24/7 Support</h6>
                <span>Phone and Email support</span>
            </div>
        </div>
    );
}
