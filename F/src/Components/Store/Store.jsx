import { Products } from "./Data/Products";
import { CountCategory } from "./Scripts/CountCategory";

import { Product } from "../Product/Product";

import styles from "./Store.module.scss";

export const Store = (props) => {
    const categoryArray = CountCategory();

    const { cartArray, setCartArray } = props.homeContext;

    const storeGrid = (
        <>
            {Products.map((item, index) => {
                return (
                    <Product
                        imageAlt={item.name}
                        imageSrc={`https://robohash.org/${item.name}`}
                        item={item}
                        key={index}
                        name={item.name}
                        onClick={{cartArray, setCartArray}}
                        price={item.price}
                    />
                );
            })}
        </>
    );

    const categoryList = (
        <ul className={styles.categoryList}>
            {categoryArray.map((item, index) => {
                return (
                    <li key={index}>
                        {item[0] + ": " + item[1]}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <main className={styles.main}>
            <section className={styles.store}>
                {storeGrid}
            </section>

            <aside className={styles.category}>
                <h2>Category</h2>

                {categoryList}
            </aside>
        </main>
    );
}