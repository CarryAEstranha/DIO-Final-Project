import { useState } from "react";

import { Header } from "../../Components/Header/Header";
import { InputMessage } from "../../Components/InputMessage/InputMessage";
import { Messages } from "../../Components/Messages/Messages";

export const Contact = (props) => {
    const { cartArray, setCartArray } = props.appContext;

    const [render, setRender] = useState(false);

    const appContext = {
        cartArray,
        setCartArray
    }

    return (
        <>
            <Header homeContext={appContext} />
            <InputMessage render={{
                render,
                setRender
            }} />
            <Messages render={{
                render,
                setRender
            }} />
        </>
    );
}