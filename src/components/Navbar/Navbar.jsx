import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import bag from "../../assets/icons/bag.svg";
import menu from "../../assets/icons/menu.svg";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({ setNav, setCart }) {
    const openMobileNav = () => {
        setNav(true);
    };
    const openCart = () => {
        setCart(true);
    };
    return (
        <header className={styles.header}>
            <div className='flex'>
                <img
                    src={menu}
                    alt='menu'
                    className={styles.icon}
                    onClick={openMobileNav}
                />
                <h4 className={styles.h}>
                    3legant<span>.</span>
                </h4>
            </div>
            <nav className={styles.nav}>
                <Link to='/' className={styles.link}>
                    Home
                </Link>
                <Link to='/shop' className={styles.link}>
                    Shop
                </Link>
                <Link to='/blog' className={styles.link}>
                    blog
                </Link>
                <Link to='/contact' className={styles.link}>
                    Contact Us
                </Link>
            </nav>
            <div className={styles.icons}>
                <img src={search} alt='search' className={styles.icon} />
                <img src={user} alt='user' className={styles.icon} />
                <img
                    src={bag}
                    alt='bag'
                    className={styles.icon}
                    onClick={openCart}
                />
            </div>
        </header>
    );
}
