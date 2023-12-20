import Slider from "./../../components/Slider/Slider";
import styles from "./Home.module.css";
import sale from "../../assets/imgs/sale.png";
import arrowRight from "../../assets/icons/arrow-right.svg";
import ProductsSlider from "./../../components/ProductsSlider/ProductsSlider";
import { Link } from "react-router-dom";
import Article from "./../../components/Article/Article";
import Cards from "./Cards";
import catImg1 from "../../assets/imgs/Cat-1.png";
import catImg2 from "../../assets/imgs/Cat-2.png";
import catImg3 from "../../assets/imgs/Cat-3.png";

export default function Home() {
    const categories = [
        { id: 1, title: "living room", css: styles.category1, img: catImg1 },
        { id: 2, title: "kitchen", css: styles.category2, img: catImg2 },
        { id: 3, title: "bedroom", css: styles.category3, img: catImg3 },
    ];

    return (
        <>
            <Slider />
            <div className='container'>
                <div className={styles.categoriesGrid}>
                    {categories?.map((cat) => (
                        <div
                            className={cat?.css}
                            key={cat.id}
                            style={{ backgroundImage: cat?.img }}
                        >
                            <div>
                                <h6>{cat?.title}</h6>
                                <Link
                                    to={`/shop/${cat?.title}`}
                                    className='animated'
                                >
                                    Shop Now{" "}
                                    <img src={arrowRight} alt='arrow' />
                                </Link>
                            </div>
                        </div>
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
