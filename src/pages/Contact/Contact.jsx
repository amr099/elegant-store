import styles from "./Contact.module.css";
import about from "../../assets/imgs/sale.png";
import arrowRight from "../../assets/icons/arrow-right.svg";
import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import home from "../../assets/icons/home.svg";
import { Link } from "react-router-dom";
import Cards from "./../Home/Cards";

export default function Contact() {
    return (
        <div className='container'>
            <div className={styles.contact}>
                <div className={styles.intro}>
                    <h3>
                        We believe in sustainable decor. We’re passionate about
                        life at home.
                    </h3>
                    <p>
                        Our features timeless furniture, with natural fabrics,
                        curved lines, plenty of mirrors and classic design,
                        which can be incorporated into any decor project. The
                        pieces enchant for their sobriety, to last for
                        generations, faithful to the shapes of each period, with
                        a touch of the present
                    </p>
                </div>
                <div className={styles.aboutGrid}>
                    <img src={about} alt='about' />
                    <div className={styles.aboutContent}>
                        <h4>About Us</h4>
                        <p>
                            3legant is a gift & decorations store based in HCMC,
                            Vietnam. Est since 2019. Our customer service is
                            always prepared to support you 24/7
                        </p>
                        <Link to='/shop'>
                            {" "}
                            Shop now <img src={arrowRight} alt='arrow' />
                        </Link>
                    </div>
                </div>
                <h4>Contact Us</h4>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src={email} alt='email' />
                        <h6>Address</h6>
                        <span>234 Hai Trieu, Ho Chi Minh City, Viet Nam</span>
                    </div>
                    <div className={styles.card}>
                        <img src={phone} alt='phone' />
                        <h6>Contact Us</h6>
                        <span>+84 234 567 890</span>
                    </div>
                    <div className={styles.card}>
                        <img src={home} alt='home' />
                        <h6>Email</h6>
                        <span>hello@3legant.com</span>
                    </div>
                </div>

                <div className={styles.form}>
                    <form>
                        <div className={styles.input}>
                            <label htmlFor='name'>Full Name</label>
                            <input
                                type='text'
                                placeholder='Your Name'
                                id='name'
                                name='name'
                            />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor='email'>Email address</label>
                            <input
                                type='email'
                                placeholder='Your Email'
                                id='email'
                                name='email'
                            />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                name='message'
                                id='message'
                                cols='30'
                                rows='10'
                            ></textarea>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
            <Cards />
        </div>
    );
}
