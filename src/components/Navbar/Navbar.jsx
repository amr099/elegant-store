import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import bag from "../../assets/icons/bag.svg";
import menu from "../../assets/icons/menu.svg";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
export default function Navbar({ setNav, setFlyCart }) {
    const location = useLocation();
    const { count } = useContext(CartContext);
    const openMobileNav = () => {
        setNav(true);
    };
    const openCart = () => {
        setFlyCart(true);
    };
    return (
        <div className='container'>
            <header className={styles.header}>
                <div className='flex'>
                    <img
                        src={menu}
                        alt='menu'
                        width='50px'
                        className='icon'
                        onClick={openMobileNav}
                    />
                    <Link to='/' className='main-head'>
                        3legant<span>.</span>
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <Link
                        to='/'
                        className={`animated ${
                            location.pathname === "/" && styles.active
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to='/shop'
                        className={`animated ${
                            location.pathname === "/shop" && styles.active
                        }`}
                    >
                        Shop
                    </Link>
                    <Link
                        to='/blog'
                        className={`animated ${
                            location.pathname === "/blog" && styles.active
                        }`}
                    >
                        Blog
                    </Link>
                    <Link
                        to='/contact'
                        className={`animated ${
                            location.pathname === "/contact" && styles.active
                        }`}
                    >
                        Contact Us
                    </Link>
                </nav>
                <div className={styles.icons}>
                    <img src={search} alt='search' className='icon' />
                    <Link to='/profile'>
                        <img src={user} alt='user' className='icon' />
                    </Link>
                    <div className='flex'>
                        <img
                            src={bag}
                            alt='bag'
                            className='icon'
                            onClick={openCart}
                        />
                        {count != 0 && <span>{count}</span>}
                    </div>
                </div>
            </header>
        </div>
    );
}
