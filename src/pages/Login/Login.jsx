import styles from "./Login.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Login() {
    return (
        <section className={styles.formGrid}>
            <div className={styles.img}>
                <Link to='/' className={styles.mainHead}>
                    3legant<span>.</span>
                </Link>
            </div>
            <Outlet />
        </section>
    );
}
