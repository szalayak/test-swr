import { useBasket, useClearBasket } from '../store';
import styles from '../styles/Home.module.css'

export const Basket = () => {

    const { data: basket, error, isLoading } = useBasket();
    const [clearBasket] = useClearBasket();

    if (error) return <>{error}</>;

    if (isLoading) {
        console.log("loading basket");
        return <div className={styles.card}>
            <h2>Loading</h2>
        </div>
    }

    console.log("rendered basket");

    const handleClearBasket = () => {
        clearBasket();
    }

    return <div className={styles.card}>
        <h1>Basket - total: {basket?.total}</h1>
        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {basket?.items.map(item => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity.toString()}</td>
                        <td>{item.price.toLocaleString()}</td>
                    </tr>
                })}
            </tbody>
        </table>
        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <button onClick={handleClearBasket}>Clear Basket</button>
        </div>
    </div>

}