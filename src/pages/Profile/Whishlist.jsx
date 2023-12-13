import styles from "./Profile.module.css";
import img from "../../assets/imgs/p-color.png";
import close from "../../assets/icons/close.svg";

export default function Whishlist() {
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
                {/* {orders?.map((item) => (
                    <OrderItem item={item} key={item?.id} />
                ))} */}
                <tr>
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
                                <span>Tray Table</span>
                            </div>
                        </div>
                    </td>
                    <td>#$1234.00</td>
                    <td>
                        <button>Add to cart</button>
                    </td>
                </tr>
                <tr>
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
                                <span>Tray Table</span>
                            </div>
                        </div>
                    </td>
                    <td>#$1234.00</td>
                    <td>
                        <button>Add to cart</button>
                    </td>
                </tr>
                <tr>
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
                                <span>Tray Table</span>
                            </div>
                        </div>
                    </td>
                    <td>#$1234.00</td>
                    <td>
                        <button>Add to cart</button>
                    </td>
                </tr>
                <tr>
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
                                <span>Tray Table</span>
                            </div>
                        </div>
                    </td>
                    <td>$1234.00</td>
                    <td>
                        <button>Add to cart</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
