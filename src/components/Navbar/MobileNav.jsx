import styles from "./MobileNav.module.css";
import close from "../../assets/icons/close.svg";
import bag from "../../assets/icons/bag.svg";
import heart from "../../assets/icons/heart.svg";
import youtube from "../../assets/icons/youtube-black.svg";
import instagram from "../../assets/icons/instagram-black.svg";
import facebook from "../../assets/icons/facebook-black.svg";

// eslint-disable-next-line react/prop-types
export default function MobileNav({ nav, setNav }) {
    console.log(nav);
    const closeMobileNav = () => {
        setNav(false);
    };
    return (
        nav && (
            <dialog className={styles.mobileNav} open onClose={closeMobileNav}>
                <div>
                    <div className='flexBetween'>
                        <h6>3legant.</h6>
                        <img src={close} alt='close' onClick={closeMobileNav} />
                    </div>
                    <input type='search' placeholder='Search' />
                    {/* <nav> */}
                    <a href='#'>Home</a>
                    <a href='#'>Shop</a>
                    <a href='#'>Products</a>
                    <a href='#'>Contact Us</a>
                    {/* </nav> */}
                </div>
                <div>
                    <div className='flexBetween'>
                        <span>Cart</span>
                        <img src={bag} alt='bag' />
                    </div>
                    <div className='flexBetween'>
                        <span>Whishlist</span>
                        <img src={heart} alt='bag' />
                    </div>
                    <button>Sign In</button>
                    <div className='flex'>
                        <img src={instagram} alt='instagram' />
                        <img src={facebook} alt='facebook' />
                        <img src={youtube} alt='youtube' />
                    </div>
                </div>
            </dialog>
        )
    );
}
