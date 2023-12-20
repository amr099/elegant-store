import styles from "./Shop.module.css";
import ProductCard from "./../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [sortby, setSortby] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const categories = ["all", "kitchen", "bedroom", "living room"];

    const selectCategory = (e) => {
        if (e.target.value == "all") {
            navigate(`/shop`);
        } else {
            navigate(`/shop/${e.target.value}`);
        }
    };

    const sortFun = (a, b) => {
        if (sortby === "asc") return a.price - b.price;
        else if (sortby === "dec") return b.price - a.price;
        else return;
    };

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
        <div className='container'>
            <div className={styles.shopCover}>
                <h3>Shop Page</h3>
                <p>Let’s design the place you always imagined.</p>
            </div>
            <div className='flexBetween'>
                <div className='flex'>
                    <div className={styles.select}>
                        <label htmlFor='category'>Categories</label>
                        <select
                            name='category'
                            id='category'
                            onChange={(e) => selectCategory(e)}
                            value={params.category}
                        >
                            {categories?.map((cat) => (
                                <option value={cat} key={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.select}>
                        <label htmlFor='sort'>SortBy</label>
                        <select
                            name='sort'
                            id='sort'
                            onChange={(e) => setSortby(e.target.value)}
                        >
                            <option value='' disabled selected></option>
                            <option value='asc'>Price (ASC)</option>
                            <option value='dec'>Price (DEC)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.shopGrid}>
                {products?.sort(sortFun)?.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
