import styles from "./Home.module.css";

export default function Newsletter() {
    return (
        <div className={styles.newsletter}>
            <h4>Join Our Newsletter</h4>
            <p>Sign up for deals, new products and promotions</p>
            <div>
                <input type='email' name='email' placeholder='Email Address' />{" "}
                <button>Signup</button>
            </div>
        </div>
    );
}
