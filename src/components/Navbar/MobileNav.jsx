import styles from "./MobileNav.module.css";
import close from "../../assets/icons/close.svg";
import bag from "../../assets/icons/bag.svg";
import heart from "../../assets/icons/heart.svg";
import youtube from "../../assets/icons/youtube-black.svg";
import instagram from "../../assets/icons/instagram-black.svg";
import facebook from "../../assets/icons/facebook-black.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
export default function MobileNav({ nav, setNav }) {
    const { count } = useContext(CartContext);

    const closeMobileNav = () => {
        setNav(false);
    };
    return (
        nav && (
            <dialog className={styles.mobileNav} open onClose={closeMobileNav}>
                <div>
                    <div className='flexBetween'>
                        <Link to='/' className='main-head'>
                            3legant <span>.</span>
                        </Link>
                        <img src={close} alt='close' onClick={closeMobileNav} />
                    </div>
                    <input type='search' placeholder='Search' />
                    {/* <nav> */}
                    <Link to='/' className='animated'>
                        Home
                    </Link>
                    <Link to='/shop' className='animated'>
                        Shop
                    </Link>
                    <Link to='/blog' className='animated'>
                        Blog
                    </Link>
                    <Link to='/contact' className='animated'>
                        Contact Us
                    </Link>
                    {/* </nav> */}
                </div>
                <div>
                    <div className='flexBetween'>
                        <span>Cart</span>
                        <div className='flex'>
                            <Link to='/cart'>
                                <img src={bag} alt='bag' className='icon' />
                            </Link>
                            {count != 0 && <span>{count}</span>}
                        </div>
                    </div>
                    <div className='flexBetween'>
                        <span>Whishlist</span>
                        <Link to='/profile/wishlist'>
                            <img src={heart} alt='heart' className='icon' />
                        </Link>
                    </div>
                    <Link to='/login' className='button'>
                        Sign In
                    </Link>
                    <div className={styles.socials}>
                        <img src={instagram} alt='instagram' />
                        <img src={facebook} alt='facebook' />
                        <img src={youtube} alt='youtube' />
                    </div>
                </div>
            </dialog>
        )
    );
}
