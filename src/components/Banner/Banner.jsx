import percent from "../../assets/icons/percent.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import close from "../../assets/icons/close.svg";
import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <img src={percent} alt='percent' className={styles.percent} />
            <p>30% off storewide — Limited time! </p>

            <a href='#' className={styles.link}>
                shop now{" "}
                <img
                    src={arrowRight}
                    alt='arrow-tight'
                    className={styles.arrow}
                />
            </a>

            <img src={close} alt='close' className={styles.close} />
        </div>
    );
}
