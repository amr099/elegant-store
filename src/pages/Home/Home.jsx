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
    const categories = [
        { title: "living room", css: styles.category1 },
        { title: "kitchen", css: styles.category2 },
        { title: "bedroom", css: styles.category3 },
    ];
    return (
        <>
            <Slider />
            <div className='container'>
                <div className={styles.categoriesGrid}>
                    {categories?.map((cat) => (
                        <CategoryThumbnail
                            key={cat.title}
                            styles={cat.css}
                            title={cat.title}
                        />
                    ))}
                </div>

                <div className={styles.sectionHeader}>
                    <h4>New Arrivals</h4>
                    <Link to='/shop' className='animated'>
                        More products <img src={arrowRight} alt='arrow' />
                    </Link>
                </div>

                <ProductsSlider />

                <Cards />
            </div>

            <div className={styles.saleGrid}>
                <img src={sale} alt='sale' />
                <div className={styles.saleContent}>
                    <span>SALE UP TO 35% OFF</span>
                    <h4>HUNDREDS of New lower prices!</h4>
                    <p>
                        It’s more affordable than ever to give every room in
                        your home a stylish makeover
                    </p>
                    <Link to='/shop' className='animated'>
                        {" "}
                        Shop now <img src={arrowRight} alt='arrow' />
                    </Link>
                </div>
            </div>
            <div className='container'>
                <div className={styles.sectionHeader}>
                    <h4>Articles</h4>
                    <Link to='/blog' className='animated'>
                        More articles <img src={arrowRight} alt='arrow' />
                    </Link>
                </div>

                <div className={styles.articlesGrid}>
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        </>
    );
}
