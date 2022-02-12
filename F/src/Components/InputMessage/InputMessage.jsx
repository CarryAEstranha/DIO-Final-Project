import styles from "./InputMessage.module.scss";

export const InputMessage = (props) => {
    const { render, setRender } = props.render;

    const sendMessage = (event) => {
        event.preventDefault();

        const bodyForm = {
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }

        fetch("http://localhost:5000/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            setRender(!render);
        });
    };

    return (
        <>
            <form
                action=""
                className={styles.form}
                onSubmit={sendMessage}
            >
                <h2>Leave a Message</h2>

                <label className={styles.hidden} htmlFor="email">Your Email</label>
                <input
                    id="email"
                    placeholder="Email"
                    required
                    type="email"
                />

                <label className={styles.hidden} htmlFor="message">Message</label>
                <input
                    className={styles.inputFix}
                    id="message"
                    placeholder="Message"
                    required
                    type="text"
                />

                <button type="submit">
                    Sent
                </button>
            </form>
        </>
    );
}