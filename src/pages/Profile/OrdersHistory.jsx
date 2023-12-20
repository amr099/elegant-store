import styles from "./Profile.module.css";
import { useMediaQuery } from "react-responsive";
import Order from "./Order";
import OrderMobile from "./OrderMobile";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function OrdersHistory() {
    const { user } = useContext(AuthContext);
    const isMobile = useMediaQuery({ maxWidth: 769 });
    return (
        <table className={styles.orders}>
            <thead>
                <tr>
                    <td>Number ID</td>
                    <td>Date</td>
                    <td>Status</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {user?.orders?.map((item) =>
                    isMobile ? (
                        <OrderMobile item={item} key={item?.id} />
                    ) : (
                        <Order item={item} key={item?.id} />
                    )
                )}
            </tbody>
        </table>
    );
}
