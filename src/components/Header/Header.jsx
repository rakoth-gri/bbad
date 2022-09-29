import React from "react";

import styles from "./Header.module.css";

// компоненты
import Logo from "../Logo/Logo";
import Menu from "../Menu";

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Menu />
		</header>
	);
};

export default Header;
