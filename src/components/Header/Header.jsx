import {useState} from "react";

import styles from "./Header.module.css";

// компоненты
import Logo from "../Logo/Logo";
import Menu from "../Menu";
import Burger from "../Burger";
import FavouriteCount from "../FavouriteCount";

const Header = () => {

	const [menuVisiable, setMenuVisiable] = useState(false);

	return (
		<header className={styles.header}>
			<Logo />
			<Burger setMenuVisiable={setMenuVisiable}/>
			<Menu menuVisiable={menuVisiable}/>
			<FavouriteCount/>
		</header>
	);
};

export default Header;
