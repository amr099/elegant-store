import styles from "./Profile.module.css";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
    return (
        <div className={styles.user}>
            <h3>My Account</h3>

            <div>
                <div className={styles.profile}>
                    <div className={styles.info}>
                        <img src='' alt='profile' />
                        <h6>Sofia Havertz</h6>
                    </div>
                    <Link to='details'>Account</Link>
                    <Link to='address'>Address</Link>
                    <Link to='orders'>Orders</Link>
                    <Link to='wishlist'>Whishlist</Link>
                    <Link to='#'>Logout</Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
