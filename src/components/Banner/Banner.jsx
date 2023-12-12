import percent from "../../assets/icons/percent.svg";
import arrowRightBlue from "../../assets/icons/arrow-right-blue.svg";
import close from "../../assets/icons/close.svg";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <img src={percent} alt='percent' className={styles.percent} />
            <p>30% off storewide — Limited time! </p>

            <Link to='/shop' className={styles.link}>
                shop now{" "}
                <img
                    src={arrowRightBlue}
                    alt='arrow-tight'
                    className={styles.arrow}
                />
            </Link>

            <img src={close} alt='close' className={styles.close} />
        </div>
    );
}
