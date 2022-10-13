import { useState, memo } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.css";

// хуки
import { useSelector } from "react-redux/es/hooks/useSelector";

// константы
import { menuLinks } from "../../constants/constants.js";

const Menu = memo(() => {
	const menuVisiable = useSelector((state) => state.menuSliceReducer.menuVisiable);
	const auth = useSelector((state) => state.authSliceReducer.auth);

	const [isActive, setIsActive] = useState(0);

	return (
		<nav>
			<ul className={menuVisiable ? styles.active : ""}>
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
