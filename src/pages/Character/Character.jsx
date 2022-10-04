import { useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";
// хуки
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";

// экшены
import { fetchingCharacter, setCharacter } from "../../store/charactersSlice/charactersSlice";

// константы
import { spinnerProps } from "../../constants/constants";

// компоненты
import CharInfo from "./CharInfo";
import BtnBack from "../../components/BtnBack";

const Character = () => {
	const { char_id: id } = useParams();
		const dispatch = useDispatch();

	const status = useSelector((state) => state.characterSliceReducer.status);
	const character = useSelector((state) => state.characterSliceReducer.character);

	useEffect(() => {
		id && dispatch(fetchingCharacter(id));
		return () => dispatch(setCharacter(null));
	}, []);

	return (
		<section>
			<BtnBack/>
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
