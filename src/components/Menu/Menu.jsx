import {useState, memo} from "react";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.css";

// константы
import { menuLinks } from "../../constants/constants.js";

const Menu = memo(() => {

	const [isActive, setIsActive] = useState(0);

	return (
		<nav>
			<ul>
				{menuLinks.map(({ to, text, number }) => {
					return (
						<NavLink
							to={to}
							key={text}
							className={isActive === number ? styles.activeLinks : ""}
							onClick={() => setIsActive(number)}
						>
							{text}
						</NavLink>
					);
				})}
			</ul>
		</nav>
	);
});

export default Menu;
