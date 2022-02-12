import { useState } from "react";

import styles from "./Cart.module.scss";

import iconClose from "../../Assets/iconClose.png";

export const Cart = (props) => {
    const { cartArray, setCartArray } = props.cartArray;
    const { showCart, setShowCart } = props.showCart;

    const [cartSum, setCartSum] = useState(() => {
        let sum = 0

        cartArray.forEach((item) => {
            sum = sum + item.price;
        });

        return sum;
    });

    const cartArrayList = (
        <ul className={styles.cartArrayList}>
            {cartArray.map((item, index) => {
                return (
                    <li key={index}>
                        <p>{item.name}</p>

                        <p>{item.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD"
                        })}</p>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div className={styles.cartContainer}>
            <div className={styles.cart}>
                <header>
                    <h2>Cart</h2>

                    <button onClick={() => {
                        document.body.style.overflow = "unset";

                        setShowCart(!showCart);
                    }}>
                        <img
                            alt="Close"
                            src={iconClose}
                        />
                    </button>
                </header>

                {cartArrayList}

                <footer>
                    <div>
                        <button onClick={() => {
                            if (cartSum !== 0) {
                                document.body.style.overflow = "unset";

                                setCartArray([]);
                                setShowCart(!showCart);

                                alert("Done");
                            }
                        }}>
                            Buy All
                        </button>
                        <button onClick={() => {
                            setCartArray([]);
                            setCartSum(0);
                        }}>
                            Clear All
                        </button>
                    </div>

                    <p>
                        {cartSum.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD"
                        })}
                    </p>
                </footer>
            </div>
        </div>
    );
}