import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import bag from "../../assets/icons/bag.svg";
import menu from "../../assets/icons/menu.svg";
import styles from "./Navbar.module.css";

// eslint-disable-next-line react/prop-types
export default function Navbar({ setNav }) {
    const openMobileNav = () => {
        setNav(true);
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
                <h4 className={styles.h}>3legant</h4>
            </div>
            <nav className={styles.nav}>
                <a href='#' className={styles.link}>
                    Home
                </a>
                <a href='#' className={styles.link}>
                    Shop
                </a>
                <a href='#' className={styles.link}>
                    Product
                </a>
                <a href='#' className={styles.link}>
                    Contact Us
                </a>
            </nav>
            <div className={styles.icons}>
                <img src={search} alt='search' className={styles.icon} />
                <img src={user} alt='user' className={styles.icon} />
                <img src={bag} alt='bag' className={styles.icon} />
            </div>
        </header>
    );
}
