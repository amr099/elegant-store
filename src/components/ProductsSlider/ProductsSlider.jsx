import { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";

export default function ProductsSlider() {
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
    );
}
