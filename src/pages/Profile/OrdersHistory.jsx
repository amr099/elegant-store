import styles from "./Profile.module.css";

export default function OrdersHistory() {
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
                {/* {orders?.map((item) => (
                    <OrderItem item={item} key={item?.id} />
                ))} */}
                <tr>
                    <td>#3456_768</td>
                    <td>October 17, 2023</td>
                    <td>#Delivered</td>
                    <td>#$1234.00</td>
                </tr>
                <tr>
                    <td>#3456_768</td>
                    <td>October 17, 2023</td>
                    <td>#Delivered</td>
                    <td>#$1234.00</td>
                </tr>
                <tr>
                    <td>#3456_768</td>
                    <td>October 17, 2023</td>
                    <td>#Delivered</td>
                    <td>#$1234.00</td>
                </tr>
                <tr>
                    <td>#3456_768</td>
                    <td>October 17, 2023</td>
                    <td>#Delivered</td>
                    <td>#$1234.00</td>
                </tr>
            </tbody>
        </table>
    );
}
