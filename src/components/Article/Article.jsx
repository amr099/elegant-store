import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
import article from "../../assets/imgs/article.png";

export default function Article() {
    return (
        <article>
            <img src={article} alt='article' />
            <div>
                <h6 className='h7'>7 ways to decor your home</h6>
                <Link to='#' className='animated'>
                    Read More <img src={arrowRight} alt='arrow' />
                </Link>
            </div>
        </article>
    );
}
