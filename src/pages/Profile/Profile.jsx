import styles from "./Profile.module.css";
import { Link, Outlet, Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
    const { user, setUser } = useContext(AuthContext);
    const isMobile = useMediaQuery({ maxWidth: 769 });
    const navigate = useNavigate();

    const links = [
        { title: "Account", link: "" },
        { title: "Address", link: "address" },
        { title: "Orders", link: "orders" },
        { title: "Wishlist", link: "wishlist" },
    ];

    const onChange = (event) => {
        navigate(event.target.value);
    };

    const logout = () => {
        setUser(false);
        navigate("/");
    };
    return user ? (
        <div className='container'>
            <div className={styles.user}>
                <h3>My Account</h3>

                <div>
                    <div className={styles.profile}>
                        <div className={styles.info}>
                            <img src={user.avatar} alt='profile' />
                            <h6>{user.name}</h6>
                        </div>
                        {isMobile ? (
                            <>
                                <select
                                    name=''
                                    id=''
                                    onChange={(e) => onChange(e)}
                                >
                                    {links.map((link) => (
                                        <option
                                            key={link.title}
                                            value={link.link}
                                        >
                                            {link.title}
                                        </option>
                                    ))}
                                </select>
                                <br />
                                <br />
                                <button
                                    className={styles.logout}
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                {links.map((link) => (
                                    <Link to={link.link} key={link.title}>
                                        {link.title}
                                    </Link>
                                ))}
                                <button
                                    className={styles.logout}
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    ) : (
        <Navigate to='/login' />
    );
}
