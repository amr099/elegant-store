/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import heart from "../../assets/icons/card-heart.svg";
import rating from "../../assets/icons/rating.svg";

export default function ProductCard({ item }) {
    const { AddToCart } = useContext(CartContext);

    const divBg = {
        backgroundImage: `url(${item?.img})`,
    };

    return (
        <div className={styles.product}>
            <Link to={`/product/${item?.id}`}>
                <div className={styles.card} style={divBg}>
                    <div className={styles.col}>
                        <div className={styles.new}>new</div>
                        <div className={styles.offer}>-50%</div>
                    </div>
                    <img src={heart} alt='heart' />
                </div>
            </Link>
            <button
                className={styles.button}
                onClick={() => AddToCart({ ...item, amount: 1 })}
            >
                Add to cart
            </button>
            <div className={styles.content}>
                <img src={rating} alt='rating' />
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
