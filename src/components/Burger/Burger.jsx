import { useCallback, memo } from "react";
import { GiHamburger } from "react-icons/gi";

import styles from "./Burger.module.css";

// константы
import { burgerProps } from "../../constants/constants";

const Burger = memo(({ setMenuVisiable}) => {    

	const changeMenuVisiable = useCallback(() => setMenuVisiable(prev => !prev), []);

	return (
		<div className={styles.burgerDiv}>
			<GiHamburger style={burgerProps} className={styles.GiHamburger} onClick={changeMenuVisiable}/>
		</div>
	);
});

export default Burger;
