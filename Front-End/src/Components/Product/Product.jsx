import styles from "./Product.module.scss";

export const Product = (props) => {
    const { cartArray, setCartArray } = props.onClick;

    return (
        <div className={styles.productContainer}>
            <img
                src={props.imageSrc}
                alt={props.imageAlt}
            />

            <div className={styles.informationContainer}>
                <h3>{props.name}</h3>

                <p>{props.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })}</p>
            </div>

            <button onClick={() => {
                setCartArray(cartArray => [...cartArray, props.item]);
            }}>
                Add to Cart
            </button>
        </div>
    );
}