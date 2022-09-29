import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Navigation } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

// компоненты
import App from "./App";

// стили
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<Navigation>
			<App />
		</Navigation>
	</Provider>
);
