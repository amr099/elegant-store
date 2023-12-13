import styles from "./Profile.module.css";
import pencil from "../../assets/icons/pencil.svg";

export default function Address() {
    return (
        <>
            <div className={styles.address}>
                <div className={styles.card}>
                    <div className='flexBetween'>
                        <h6>Billing Address</h6>
                        <div className='flex'>
                            <img src={pencil} alt='pencil' />
                            <span>EDIT</span>
                        </div>
                    </div>
                    <p>Sofia Havertz</p>
                    <p>(+1) 234 567 890</p>
                    <p>345 Long Island, NewYork, United States</p>
                </div>
                <div className={styles.card}>
                    <div className='flexBetween'>
                        <h6>Shipping Address</h6>
                        <div className='flex'>
                            <img src={pencil} alt='pencil' />
                            <span>EDIT</span>
                        </div>
                    </div>
                    <p>Sofia Havertz</p>
                    <p>(+1) 234 567 890</p>
                    <p>345 Long Island, NewYork, United States</p>
                </div>
            </div>
        </>
    );
}
