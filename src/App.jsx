import { Routes, Route } from "react-router-dom";

import "./App.css";

// компоненты ------
import Header from "./components/Header";

// константы
import { routes } from "./routing/routing";

function App() {
	return (
		<div className="App">
			<Header/>
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
