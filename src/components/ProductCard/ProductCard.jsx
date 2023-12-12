/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ item }) {
    // const { name, img, price, oldPrice } = item;

    const divBg = {
        backgroundImage: `url(${item?.img})`,
    };

    return (
        <div className={styles.product}>
            <Link to={`/product/${item?.id}`}>
                <div className={styles.img} style={divBg}>
                    <div className={styles.col}>
                        <div className={styles.new}>new</div>
                        <div className={styles.offer}>-50%</div>
                    </div>
                    <button className={styles.button}>Add to cart</button>
                </div>
            </Link>
            <div className={styles.content}>
                <span className={styles.rating}></span>
                <p className={styles.title}>{item?.name}</p>
                <p className={styles.price}>
                    ${item?.price}
                    {item?.oldPrice && (
                        <span className={styles.oldPrice}>
                            ${item?.oldPrice}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
}
