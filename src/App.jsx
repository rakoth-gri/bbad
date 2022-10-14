import { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// хуки
import { useDispatch } from "react-redux";

// экшены menuSLice
import { setMenuInvisiable } from "./store/menuSlice/menuSlice";

// константы
import { routes } from "./routing/routing";

// компоненты ------
import Footer from "./components/Footer";
import Header from "./components/Header";
import { StateManager } from "./context/context";

function App() {
	const ref = useRef(null);
	const dispatch = useDispatch();

	// используем Dom-Api
	useEffect(() => {
		ref.current?.addEventListener("click", (e) => {
			if (!e.target.closest("div.Burger_burgerDiv__FCe2D")) dispatch(setMenuInvisiable());
		});
	}, []);

	return (
		<StateManager>
			<div className="App" ref={ref}>
				<Header />
				<main className="container">
					<Routes>
						{routes.map((route) => (
							<Route path={route.path} element={<route.component />} key={route.path} />
						))}
					</Routes>
				</main>
				<Footer />
			</div>
		</StateManager>
	);
}

export default App;
