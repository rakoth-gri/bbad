import { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// компоненты ------
import Header from "./components/Header";

// хуки
import { useDispatch } from "react-redux";

// экшены menuSLice
import { setMenuInvisiable } from "./store/menuSlice/menuSlice";

// константы
import { routes } from "./routing/routing";

function App() {
	const ref = useRef(null);
	const dispatch = useDispatch();

	// используем Dom-Api
	useEffect(() => {
		ref.current?.addEventListener("click", (e) => {					
			if (!e.target.closest("div.Burger_burgerDiv__FCe2D")) dispatch(setMenuInvisiable());
		});
	}, []);

	// Burger_burgerDiv__FCe2D
	// Burger_GiHamburger__c3mps

	return (
		<div className="App" ref={ref}>
			<Header />
			<main className="container">
				<Routes>
					{routes.map((route) => (
						<Route path={route.path} element={<route.component />} key={route.path} />
					))}
				</Routes>
			</main>
			<footer>Footer моего сайта</footer>
		</div>
	);
}

export default App;
