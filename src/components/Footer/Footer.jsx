import styles from "./Footer.module.css";
import facebook from "../../assets/icons/facebook.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";

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
                        <a href='#'>Home</a>
                        <a href='#'>Product</a>
                        <a href='#'>Shop</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Contact Us</a>
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
