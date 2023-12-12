import arrowRight from "../../assets/icons/arrow-right.svg";
import article from "../../assets/imgs/article.png";

export default function Article() {
    return (
        <article>
            <img src={article} alt='article' />
            <div>
                <h6>7 ways to decor your home</h6>
                <a href='#'>
                    Read More <img src={arrowRight} alt='arrow' />
                </a>
            </div>
        </article>
    );
}
