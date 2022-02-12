import styles from "./Messages.module.scss";

import { useEffect, useState } from "react";

export const Messages = (props) => {
    const { render } = props.render;

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/message").then((response) => {
            return response.json();
        }).then((data) => {
            setData(data);
        }).catch((error) => {
            console.error(error);
        });
    }, [render]);

    const messages = (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index} className={styles.message}>
                        <h3>{item.email}</h3>

                        <p>{item.message}</p>

                        <p className={styles.date}>
                            {new Date(item.created_at).toLocaleString("en-US")}
                        </p>
                    </div>
                );
            })}
        </>
    );

    return (
        <section className={styles.messages}>
            {messages}
        </section>
    );
}