import styles from "./flyoutCart.module.css";
import cartItem from "../../assets/imgs/p-color.png";
import close from "../../assets/icons/close.svg";

export default function FlyoutCartItem() {
    return (
        <div className={styles.flyoutCartItem}>
            <div className='flex'>
                <img src={cartItem} alt='cartItem-img' />
                <div className={styles.col}>
                    <span className={styles.name}>Tray Table</span>
                    <span className={styles.color}>Color: Black</span>
                    <input type='number' />
                </div>
            </div>
            <div className={styles.col}>
                <p>$19.9</p>
                <img src={close} alt='close' />
            </div>
        </div>
    );
}
