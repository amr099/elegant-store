import { register } from "swiper/element/bundle";
import slider1 from "../../assets/imgs/slider-1.png";
import styles from "./Slider.module.css";

register();

export default function Slider() {
    return (
        <>
            <swiper-container
                slides-per-view='1'
                speed='500'
                loop='true'
                css-mode='true'
                navigation='true'
                pagination='true'
            >
                <swiper-slide>
                    <img
                        src={slider1}
                        alt='slider-img'
                        className={styles.img}
                        loading='lazy'
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        src={slider1}
                        alt='slider-img'
                        className={styles.img}
                        loading='lazy'
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        src={slider1}
                        alt='slider-img'
                        className={styles.img}
                        loading='lazy'
                    />
                </swiper-slide>
                ...
            </swiper-container>
            <div className={styles.homeSlider}>
                <h1 className={styles.h1}>
                    Simply Unique <span className={styles.span}>/</span> Simply
                    Better
                    <span className={styles.span}>.</span>
                </h1>
                <p className={styles.p}>
                    <span className={styles.spanE}>3legant</span> is a gift &
                    decorations store based in HCMC, Vietnam. Est since 2019.
                </p>
            </div>
        </>
    );
}
