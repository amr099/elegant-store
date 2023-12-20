/* eslint-disable react/prop-types */
import styles from "./FlyoutCart.module.css";
import close from "../../assets/icons/close.svg";
import { useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext";

export default function FlyoutCartItem({ item }) {
    const { removeFromCart, changeQuantity } = useContext(CartContext);
    const q = useRef(null);

    console.log(item);
    return (
        <div className={styles.flyoutCartItem}>
            <div className='flex'>
                <img
                    src={item?.img}
                    alt='cartItem-img'
                    width={"80"}
                    height={"80"}
                />
                <div className={styles.col}>
                    <span>{item?.name}</span>
                    {/* <span className={styles.color}>Color: Black</span> */}
                    <input
                        type='number'
                        min={1}
                        value={item?.amount}
                        onChange={() =>
                            changeQuantity(item?.id, q.current.value)
                        }
                        ref={q}
                    />
                </div>
            </div>
            <div className={styles.col}>
                <span>${Number(item?.price) * Number(item?.amount)}</span>
                <img
                    src={close}
                    alt='close'
                    onClick={() => removeFromCart(item.id)}
                />
            </div>
        </div>
    );
}
