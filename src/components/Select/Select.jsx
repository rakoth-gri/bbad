import { memo } from "react";

import styles from "./Select.module.css";

// хуки
import { useDispatch, useSelector } from "react-redux/es/exports";

// экшены
import { openPopup, changeSort } from "../../store/episodesSlice/episodesSlice";

// константы
import { selectArray } from "./../../constants/constants";

const Select = memo(() => {
	const dispatch = useDispatch();

	const popup = useSelector((state) => state.episodesSliceReducer.popup);
	const sort = useSelector((state) => state.episodesSliceReducer.sort);

	const handleSelectChange = (value) => dispatch(changeSort(value));

	return (
		<>
			<div className={styles.sort}>
				<span onClick={() => dispatch(openPopup())}> Сортировать по: </span>
			</div>
			<ul className={popup ? `${styles.popup} ${styles.active}` : styles.popup}>
				{selectArray.map(({ value, text }) => (
					<li
						value={value}
						key={value}
						className={sort === value ? `${styles.selected} ${styles.popup_li}` : styles.popup_li}
						onClick={() => handleSelectChange(value)}
					>
						{" "}
						{text}{" "}
					</li>
				))}
			</ul>
		</>
	);
});

export default Select;
