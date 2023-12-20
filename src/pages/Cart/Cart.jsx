import { Outlet, useLocation } from "react-router-dom";
import styles from "./Cart.module.css";
import { useEffect, useState } from "react";

export default function Cart() {
    const [step, setStep] = useState();
    const location = useLocation();

    console.log(step);

    useEffect(() => {
        switch (location.pathname) {
            case "/cart":
                setStep(1);
                break;
            case "/cart/checkout":
                setStep(2);
                break;
            case "/cart/complete":
                setStep(3);
                break;
            default:
                break;
        }
    }, [location]);

    return (
        <div className='container'>
            <div className={styles.cart}>
                <h3>Cart</h3>
                <div className={styles.steps}>
                    <h6
                        className={
                            step === 1 ? styles.selected : styles.completed
                        }
                    >
                        Shopping cart
                    </h6>
                    <h6
                        className={
                            step === 2
                                ? styles.selected
                                : step > 2
                                ? styles.completed
                                : ""
                        }
                    >
                        Checkout details
                    </h6>
                    <h6 className={step > 2 && styles.completed}>
                        Order complete
                    </h6>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
