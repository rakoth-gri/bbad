import { useCallback, memo} from "react";
import { GiHamburger } from "react-icons/gi";

// хуки
import { useDispatch } from "react-redux/es/exports";

// экшены
import { setMenuVisiable } from "../../store/menuSlice/menuSlice";

import styles from "./Burger.module.css";

// константы
import { burgerProps } from "../../constants/constants";

const Burger = memo(() => {
	
	const dispatch = useDispatch();

	const makeMenuVisiable = useCallback(() => dispatch(setMenuVisiable()), []);

	return (
		<div className={styles.burgerDiv}>
			<GiHamburger style={burgerProps} className={styles.GiHamburger} onClick={makeMenuVisiable}/>
		</div>
	);
});

export default Burger;
