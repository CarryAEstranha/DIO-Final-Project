import { useState } from "react";

import { Header } from "../../Components/Header/Header";
import { Store } from "../../Components/Store/Store";

export const Home = (props) => {
    const { cartArray, setCartArray } = props.appContext;

    const appContext = {
        cartArray, 
        setCartArray
    }

    return (
        <>
            <Header homeContext={appContext} />
            <Store homeContext={appContext} />
        </>
    );
}