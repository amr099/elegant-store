import styles from "./Login.module.css";

import { Outlet } from "react-router-dom";

export default function Login() {
    return (
        <section className={styles.formGrid}>
            <div className={styles.img}>
                <h6>3legant.</h6>
            </div>
            <Outlet />
        </section>
    );
}
