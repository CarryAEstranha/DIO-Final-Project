import { useState } from "react";
import {
	BrowserRouter,
	Route,
	Routes
} from "react-router-dom";

import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";

import "./Styles/global.css";

function App() {
	const [cartArray, setCartArray] = useState([]);

    const props = {
        cartArray, 
        setCartArray
    }

	return (
		<BrowserRouter>
			<Routes>
				<Route
					element={<Home appContext={props} />}
					exact
					path="/"
				/>
				<Route
					element={<Contact appContext={props} />}
					path="/contact"
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;