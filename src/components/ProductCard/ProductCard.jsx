import styles from "./ProductCard.module.css";

export default function ProductCard() {
    return (
        <div className={styles.product}>
            <div className={styles.img}>
                <div className={styles.col}>
                    <div className={styles.new}>new</div>
                    <div className={styles.offer}>-50%</div>
                </div>
                <button className={styles.button}>Add to cart</button>
            </div>
            <div className={styles.content}>
                <span className={styles.rating}></span>
                <p className={styles.title}>Loveseat Sofa</p>
                <p className={styles.price}>
                    $199.00 <span className={styles.oldPrice}>$400.00</span>
                </p>
            </div>
        </div>
    );
}
