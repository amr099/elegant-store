import styles from "./Login.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Login() {
    return (
        <section className={styles.formGrid}>
            <div className={styles.img}>
                <h6>3legant.</h6>
            </div>
            {/* <SignIn /> */}
            <SignUp />
        </section>
    );
}
