import { useState } from "react";

import { Cart } from "../Cart/Cart";
import { HeaderAnchor } from "../HeaderAnchor/HeaderAnchor";

import styles from "./Header.module.scss";

import iconCart from "../../Assets/iconCart.svg";

export const Header = (props) => {
    const { cartArray, setCartArray } = props.homeContext;

    const [showCart, setShowCart] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <h1 className={styles.headerTitle}>Robot Shop</h1>

                <div className={styles.navCartContainer}>
                    <nav className={styles.headerNavbar}>
                        <HeaderAnchor href="/">
                            Home
                        </HeaderAnchor>
                        <HeaderAnchor href="/contact">
                            Contact
                        </HeaderAnchor>
                    </nav>

                    <div className={styles.cartButtonContainer}>
                        <button className={styles.cartButton} onClick={() => {
                            document.body.style.overflow = "hidden";

                            setShowCart(!showCart);
                        }}>
                            <img
                                alt="Cart icon"
                                src={iconCart}
                            />

                            <p>{cartArray.length}</p>
                        </button>
                    </div>
                </div>
            </div>

            {showCart === true ? (
                <Cart cartArray={{ cartArray, setCartArray }} showCart={{ showCart, setShowCart }} />
            ) : (
                null
            )}
        </header>
    );
}