import styles from "./ProductDetails.module.css";
import rating from "../../assets/icons/rating.svg";
// import pColor from "../../assets/imgs/p-color.png";
import ProductsSlider from "./../../components/ProductsSlider/ProductsSlider";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const [product, setProduct] = useState([]);
    const params = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(
                "https://657600c70febac18d4038f91.mockapi.io/api/product"
            );
            const data = await response.json();

            setProduct(data[params.id - 1]);
            console.log(data);
        };

        getProduct();
    }, [params]);
    return (
        <>
            <div className={styles.productGrid}>
                {/* <img
                    src={product?.img}
                    alt='p-img'
                    className={styles.thumbnail}
                /> */}
                {/* <div className={styles.gallary}> */}
                <img src={product?.img} alt='p-img' />
                {/* </div> */}
                <div className={styles.details}>
                    <img src={rating} alt='rating' />
                    <h4>{product.name}</h4>
                    <p className={styles.desc}>{product?.description}</p>
                    <div className='flex'>
                        <h6>${product?.price}</h6>{" "}
                        {product?.oldPrice && (
                            <span className={styles.oldPrice}>
                                ${product?.oldPrice}
                            </span>
                        )}
                    </div>
                    <span>Measurements</span>
                    <p>17 1/2x20 5/8 </p>
                    {/* <span>Choose Color</span>
                    <p>Black</p>
                    <div className='flex'>
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                        <img src={pColor} alt='p-color' />
                    </div> */}
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
