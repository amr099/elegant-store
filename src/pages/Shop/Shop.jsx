import styles from "./Shop.module.css";
import ProductCard from "./../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const params = useParams();

    useEffect(() => {
        const getProducts = async () => {
            let products = [];
            const response = await fetch(
                "https://657600c70febac18d4038f91.mockapi.io/api/products"
            );
            const data = await response.json();

            if (params.category) {
                setProducts(
                    data.find((cat) => cat.name == params.category).products
                );
            } else {
                for (let i in data) {
                    products.push(...data[i].products);
                }
                setProducts(products);
            }
        };

        getProducts();
    }, [params]);
    return (
        <>
            <div className={styles.shopCover}>
                <h3>Shop Page</h3>
                <p>Let’s design the place you always imagined.</p>
            </div>

            <div className={styles.shopGrid}>
                {products?.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>
        </>
    );
}
