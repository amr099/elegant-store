import Slider from "./../../components/Slider/Slider";
import styles from "./Home.module.css";
import sale from "../../assets/imgs/sale.png";
import arrowRight from "../../assets/icons/arrow-right.svg";
import ProductsSlider from "./../../components/ProductsSlider/ProductsSlider";
import { Link } from "react-router-dom";
import CategoryThumbnail from "./../../components/CategoryThumbnail/CategoryThumbnail";
import Article from "./../../components/Article/Article";
import Cards from "./Cards";

export default function Home() {
    return (
        <main>
            <div className='container'>
                <Slider />

                {/* Categories */}
                <div className={styles.categoriesGrid}>
                    <CategoryThumbnail
                        styles={styles.category1}
                        title={"living room"}
                    />
                    <CategoryThumbnail
                        styles={styles.category2}
                        title={"kitchen"}
                    />
                    <CategoryThumbnail
                        styles={styles.category3}
                        title={"bedroom"}
                    />
                </div>
                {/* End Categories */}

                {/* Products */}

                <div className={styles.sectionHeader}>
                    <h4>New Arrivals</h4>
                    <Link to='/shop'>
                        More products <img src={arrowRight} alt='arrow' />
                    </Link>
                </div>

                <ProductsSlider />

                {/* Cards */}
                <Cards />
                {/* Articles */}

                <div className={styles.sectionHeader}>
                    <h4>Articles</h4>
                    <Link to='/blog'>
                        More articles <img src={arrowRight} alt='arrow' />
                    </Link>
                </div>

                <div className={styles.articlesGrid}>
                    <Article />
                    <Article />
                    <Article />
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
                        <Link to='/shop'>
                            {" "}
                            Shop now <img src={arrowRight} alt='arrow' />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
