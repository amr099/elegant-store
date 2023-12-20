import styles from "./Login.module.css";
import { useContext, useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { formReducer, initialFormState } from "./reducer";
import Loading from "../../components/Loading/Loading";

export default function SignIn() {
    const [users, setUsers] = useState([]);
    const { setUser } = useContext(AuthContext);
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch(
                "https://657600c70febac18d4038f91.mockapi.io/api/orders"
            );
            const data = await response.json();
            setUsers(data);
        };
        getUsers();
    }, []);

    const onSubmit = (data) => {
        dispatch({ type: "LOADING" });
        const loggedUser = users.find(
            (user) =>
                user.username == data.username && user.password == data.password
        );
        if (loggedUser) {
            reset();
            setUser(loggedUser);
            navigate("/profile");
        } else {
            dispatch({
                type: "ERROR",
                payload: "Username or password are not correct!",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Sign In</h4>
            <p className='flex body2'>
                Don’t have an accout yet?{" "}
                <Link to='/login/register'>Sign Up</Link>
            </p>
            <div>
                <input
                    type='username'
                    name='username'
                    placeholder='username'
                    {...register("username", { required: true })}
                />
                {errors.username && (
                    <span className={styles.error}>This field is required</span>
                )}
            </div>
            <div>
                <input
                    type='password'
                    placeholder='Password'
                    {...register("password", { required: true })}
                />
                {errors.password && (
                    <span className={styles.error}>This field is required</span>
                )}
            </div>

            <div className='flexBetween'>
                <div>
                    <input type='checkbox' id='remember' />
                    <label htmlFor='remember'>Remember Me</label>
                </div>
                <a href='#'>Forget password?</a>
            </div>
            {formState?.error && (
                <p className={styles.error}>{formState?.error}</p>
            )}
            <button>{formState?.loading ? <Loading /> : "Sign In"}</button>
        </form>
    );
}
