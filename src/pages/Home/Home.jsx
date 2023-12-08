import Banner from "./../../components/Banner/Banner";
import Navbar from "./../../components/Navbar/Navbar";
import Slider from "./../../components/Slider/Slider";
import styles from "./Home.module.css";
import arrowRight from "../../assets/icons/arrow-right.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
import { register } from "swiper/element/bundle";
import lock from "../../assets/icons/lock.svg";
import delivery from "../../assets/icons/delivery.svg";
import money from "../../assets/icons/money.svg";
import phone from "../../assets/icons/phone.svg";
import sale from "../../assets/imgs/sale.png";
import article from "../../assets/imgs/article.png";
import Footer from "../../components/Footer/Footer";

register();

export default function Home() {
    return (
        <main>
            <Banner />
            <div className='container'>
                <Navbar />
                <Slider />

                {/* Categories */}
                <div className={styles.categoriesGrid}>
                    <div className={styles.category1}>
                        <div className={styles.content}>
                            <h5 className={styles.h5}>Living Room</h5>
                            <a href='#' className={styles.catLink}>
                                Shop Now <img src={arrowRight} alt='arrow' />
                            </a>
                        </div>
                    </div>
                    <div className={styles.category2}>
                        <div className={styles.content}>
                            <h5 className={styles.h5}>Bedroom</h5>
                            <a href='#' className={styles.catLink}>
                                Shop Now <img src={arrowRight} alt='arrow' />
                            </a>
                        </div>
                    </div>
                    <div className={styles.category3}>
                        <div className={styles.content}>
                            <h5 className={styles.h5}>Kitchen</h5>
                            <a href='#' className={styles.catLink}>
                                Shop Now <img src={arrowRight} alt='arrow' />
                            </a>
                        </div>
                    </div>
                </div>
                {/* End Categories */}

                {/* Products */}

                <div className={styles.sectionHeader}>
                    <h4>New Arrivals</h4>
                    <a href='#'>
                        More products <img src={arrowRight} alt='arrow' />
                    </a>
                </div>
                <swiper-container
                    slides-per-view='4'
                    speed='500'
                    loop='true'
                    css-mode='true'
                    scrollbar='true'
                >
                    <swiper-slide>
                        <ProductCard />
                    </swiper-slide>
                    <swiper-slide>
                        <ProductCard />
                    </swiper-slide>
                    <swiper-slide>
                        <ProductCard />
                    </swiper-slide>
                    <swiper-slide>
                        <ProductCard />
                    </swiper-slide>
                    <swiper-slide>
                        <ProductCard />
                    </swiper-slide>
                </swiper-container>

                {/* Cards */}
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src={delivery} alt='delivery' />
                        <h6>Free Shipping</h6>
                        <span>Order above $200</span>
                    </div>
                    <div className={styles.card}>
                        <img src={money} alt='money' />
                        <h6>Money-back</h6>
                        <span>30 days guarantee</span>
                    </div>
                    <div className={styles.card}>
                        <img src={lock} alt='lock' />
                        <h6>Secure Payments</h6>
                        <span>Secured by Stripe</span>
                    </div>
                    <div className={styles.card}>
                        <img src={phone} alt='phone' />
                        <h6>24/7 Support</h6>
                        <span>Phone and Email support</span>
                    </div>
                </div>

                {/* Articles */}

                <div className={styles.sectionHeader}>
                    <h4>Articles</h4>
                    <a href='#'>
                        More articles <img src={arrowRight} alt='arrow' />
                    </a>
                </div>

                <div className={styles.articlesGrid}>
                    <article>
                        <img src={article} alt='article' />
                        <div>
                            <h6>7 ways to decor your home</h6>
                            <a href='#'>
                                Read More <img src={arrowRight} alt='arrow' />
                            </a>
                        </div>
                    </article>
                    <article>
                        <img src={article} alt='article' />
                        <div>
                            <h6>7 ways to decor your home</h6>
                            <a href='#'>
                                Read More <img src={arrowRight} alt='arrow' />
                            </a>
                        </div>
                    </article>
                    <article>
                        <img src={article} alt='article' />
                        <div>
                            <h6>7 ways to decor your home</h6>
                            <a href='#'>
                                Read More <img src={arrowRight} alt='arrow' />
                            </a>
                        </div>
                    </article>
                </div>

                {/* Sale */}
                <div className={styles.saleGrid}>
                    <img src={sale} alt='sale' />
                    <div className={styles.saleContent}>
                        <span>SALE UP TO 35% OFF</span>
                        <h4>HUNDREDS of New lower prices!</h4>
                        <p>
                            It’s more affordable than ever to give every room in
                            your home a stylish makeover
                        </p>
                        <a href='#'>
                            {" "}
                            Shop now <img src={arrowRight} alt='arrow' />
                        </a>
                    </div>
                </div>
            </div>
            {/* Newsletter */}
            <div className={styles.newsletter}>
                <h4>Join Our Newsletter</h4>
                <p>Sign up for deals, new products and promotions</p>
                <div>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                    />{" "}
                    <button>Signup</button>
                </div>
            </div>
            <Footer />
        </main>
    );
}
