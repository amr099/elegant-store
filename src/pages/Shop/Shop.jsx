import styles from "./Shop.module.css";
import ProductCard from "./../../components/ProductCard/ProductCard";

export default function Shop() {
    return (
        <>
            <div className={styles.shopCover}>
                <h3>Shop Page</h3>
                <p>Let’s design the place you always imagined.</p>
            </div>

            <div className={styles.shopGrid}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    );
}
