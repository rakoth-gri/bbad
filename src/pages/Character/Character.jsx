import { useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";
// хуки
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";

// экшены
import { fetchingCharacter } from "../../store/charactersSlice/charactersSlice";

import styles from "./Character.module.css";
// константы
import { spinnerProps } from "../../constants/constants";

// компоненты
import CharInfo from "./CharInfo";

const Character = () => {
	const { char_id: id } = useParams();
	const location = useNavigate();
	const dispatch = useDispatch();

	const status = useSelector((state) => state.characterSliceReducer.status);
	const character = useSelector((state) => state.characterSliceReducer.character);

	useEffect(() => {
		id && dispatch(fetchingCharacter(id));
	}, []);

	return (
		<section className={styles.character}>
			<div className={styles.back}>
				<button type="button" className="btn btn-primary" onClick={() => location(-1)}>
					&#8592; Вернуться назад
				</button>
			</div>
			<ClockLoader
				loading={status ? true : false}
				cssOverride={spinnerProps}
				size={100}
				color={spinnerProps.color}
			/>
			{character && <CharInfo {...character} />}
		</section>
	);
};

export default Character;
