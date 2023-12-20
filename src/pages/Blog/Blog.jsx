import styles from "./Blog.module.css";
import Article from "./../../components/Article/Article";

export default function Blog() {
    return (
        <div className='container'>
            <div className={styles.blog}>
                <div className={styles.blogCover}>
                    <h3>Blog Page</h3>
                    <p>Home ideas and design inspiration</p>
                </div>

                <div className={styles.blogGrid}>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        </div>
    );
}
