/* eslint-disable react/prop-types */
import styles from "./Profile.module.css";
import img from "../../assets/imgs/p-color.png";
import close from "../../assets/icons/close.svg";

export default function WishlistItemMobile({ item }) {
    return (
        <tr className={styles.wishlistItemMobile}>
            <td>
                {" "}
                <div className='flex'>
                    <img src={close} alt='close' />
                    <img
                        src={img}
                        alt='cartItem-img'
                        width={"80"}
                        height={"80"}
                    />
                    <div className={styles.col}>
                        <span>{item.name}</span>
                        <span>${item.price}</span>
                    </div>
                </div>
            </td>
            <td>
                <button>Add to cart</button>
            </td>
        </tr>
    );
}
