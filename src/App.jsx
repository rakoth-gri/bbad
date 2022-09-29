import { Routes, Route } from "react-router-dom";

import "./App.css";

// компоненты ------
import Menu from "./components/Menu";
import Logo from "./components/Logo/Logo";

// константы
import { routes } from "./routing/routing";

function App() {
	return (
		<div className="App">
			<header className="header">
				<Logo/>
				<Menu />
			</header>
			<main className='container'>
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
