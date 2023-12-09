import styles from "./ProductDetails.module.css";
import rating from "../../assets/icons/rating.svg";
import pImg from "../../assets/imgs/p-img.png";
import pColor from "../../assets/imgs/p-color.png";
import ProductsSlider from "./../../components/ProductsSlider/ProductsSlider";
import arrowRight from "../../assets/icons/arrow-right.svg";

export default function ProductDetails() {
    return (
        <>
            <div className={styles.productGrid}>
                <img src={pImg} alt='p-img' className={styles.thumbnail} />
                <div className={styles.gallary}>
                    <img src={pImg} alt='p-img' />
                    <img src={pImg} alt='p-img' />
                    <img src={pImg} alt='p-img' />
                    <img src={pImg} alt='p-img' />
                    <img src={pImg} alt='p-img' />
                    <img src={pImg} alt='p-img' />
                </div>
                <div className={styles.details}>
                    <img src={rating} alt='rating' />
                    <h4>Tray Table</h4>
                    <p className={styles.desc}>
                        Buy one or buy a few and make every space where you sit
                        more convenient. Light and easy to move around with
                        removable tray top, handy for serving snacks.
                    </p>
                    <div className='flex'>
                        <h6>$199.00</h6>{" "}
                        <span className={styles.oldPrice}>$400.00</span>
                    </div>
                    <span>Measurements</span>
                    <p>17 1/2x20 5/8 </p>
                    <span>Choose Color</span>
                    <p>Black</p>
                    <div className='flex'>
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
            <div className='flexBetween'>
                <h6>You might also like</h6>
                <a href='#'>
                    more products <img src={arrowRight} alt='arrow' />
                </a>
            </div>
            <ProductsSlider />
        </>
    );
}
