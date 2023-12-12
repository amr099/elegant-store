import { Outlet } from "react-router-dom";
import styles from "./Cart.module.css";

export default function Cart() {
    return (
        <div className={styles.cart}>
            <h3>Cart</h3>
            <div className={styles.steps}>
                <h6>Shopping cart</h6>
                <h6>Checkout details</h6>
                <h6>Order complete</h6>
            </div>
            <Outlet />
        </div>
    );
}
