import { useRef, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";

export default function ProductsSlider() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(
                "https://657600c70febac18d4038f91.mockapi.io/api/product"
            );
            const data = await response.json();
            setProducts(data);
        };

        getProducts();
    }, []);
    const swiperRef = useRef(null);

    useEffect(() => {
        register();

        const params = {
            slidesPerView: 3,
            breakpoints: {
                768: {
                    slidesPerView: 4,
                },
            },
        };

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();
    }, []);
    return (
        <swiper-container
            init='false'
            ref={swiperRef}
            speed='500'
            loop='true'
            css-mode='true'
        >
            {products?.map((item) => (
                <swiper-slide key={item.id}>
                    <ProductCard item={item} />
                </swiper-slide>
            ))}
        </swiper-container>
    );
}
