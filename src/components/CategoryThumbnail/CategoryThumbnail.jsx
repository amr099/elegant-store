/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";

export default function CategoryThumbnail({ styles, title }) {
    return (
        <div className={styles}>
            <div>
                <h6>{title}</h6>
                <Link to={`/shop/${title}`} className='animated'>
                    Shop Now <img src={arrowRight} alt='arrow' />
                </Link>
            </div>
        </div>
    );
}
