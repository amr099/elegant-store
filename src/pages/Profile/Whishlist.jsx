import styles from "./Profile.module.css";
import WishlistItem from "./WishlistItem";
import { useMediaQuery } from "react-responsive";
import WishlistItemMobile from "./WishlistItemMobile";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Whishlist() {
    const { user } = useContext(AuthContext);
    const isMobile = useMediaQuery({ maxWidth: 769 });
    return (
        <table className={styles.wishlist}>
            <thead>
                <tr>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Add to cart</td>
                </tr>
            </thead>
            <tbody>
                {user?.wishlist?.map((item) =>
                    isMobile ? (
                        <WishlistItemMobile item={item} key={item?.id} />
                    ) : (
                        <WishlistItem item={item} key={item?.id} />
                    )
                )}
            </tbody>
        </table>
    );
}
