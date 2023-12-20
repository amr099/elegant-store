import { register } from "swiper/element/bundle";
import slider1 from "../../assets/imgs/slider-1.png";
import slider2 from "../../assets/imgs/slider-2.jpg";
import slider3 from "../../assets/imgs/slider-3.jpg";
import styles from "./Slider.module.css";

register();

export default function Slider() {
    const sliderImgs = [slider1, slider2, slider3];
    console.log(slider1);
    return (
        <div className='container'>
            <swiper-container
                slides-per-view='1'
                speed='500'
                autoplay='true'
                loop='true'
                css-mode='true'
            >
                {sliderImgs?.map((img) => (
                    <swiper-slide key={img}>
                        <picture>
                            <source
                                media='(min-width:650px)'
                                srcSet={img}
                                width='100%'
                                height='560px'
                            />
                            <source
                                media='(min-width:465px)'
                                srcSet={img}
                                width='100%'
                                height='260px'
                            />
                            <img
                                src={img}
                                alt='Flowers'
                                width='100%'
                                height='260px'
                            />
                        </picture>
                    </swiper-slide>
                ))}
                ...
            </swiper-container>
            <div className={styles.homeSlider}>
                <h1 className='hero'>
                    Simply Unique <span className={styles.span}>/</span> Simply
                    Better
                    <span className={styles.span}>.</span>
                </h1>
                <p className={styles.p}>
                    <span className={styles.spanE}>3legant</span> is a gift &
                    decorations store based in HCMC, Vietnam. Est since 2019.
                </p>
            </div>
        </div>
    );
}
