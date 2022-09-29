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
	const sortParams = useSelector((state) => state.episodesSliceReducer.sortParams);

	const handleSelectChange = (value) => dispatch(changeSort(value));

	return (
		<>
			<div className={styles.sort}>
				<span onClick={() => dispatch(openPopup())} className={styles.select}> Сортировать по: </span>
				<span> {sortParams.text} </span>
			</div>
			<ul className={popup ? `${styles.popup} ${styles.active}` : styles.popup}>
				{selectArray.map(({ value, text }) => (
					<li
						value={value}
						key={value}
						className={sortParams.value === value ? `${styles.selected} ${styles.popup_li}` : styles.popup_li}
						onClick={() => handleSelectChange({value,text})}
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
