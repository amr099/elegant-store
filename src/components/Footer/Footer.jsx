import styles from "./Footer.module.css";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className={styles.row}>
                    <div>
                        <h6>3legant.</h6>
                        <p>Gift & Decoration Store</p>
                    </div>
                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/contact'>Contact Us</Link>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.copy}>
                        <p>Copyright © 2023 3legant. All rights reserved</p>
                        <div className={styles.flex}>
                            <span href='#'>Privacy Policy</span>
                            <span href='#'>Terms of Use</span>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <img src={instagram} alt='instagram' />
                        <img src={youtube} alt='youtube' />
                        <img src={facebook} alt='facebook' />
                    </div>
                </div>
            </div>
        </footer>
    );
}
