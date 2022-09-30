import { useEffect, lazy, Suspense, memo} from "react";
import PulseLoader from "react-spinners/ClipLoader";
import styles from "./Characters.module.css";

// хуки
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";

// экшн на базе createAsyncThunk
import { fetchingCharacters } from "../../store/charactersSlice/charactersSlice";
// константы
import { spinnerProps, limit } from "../../constants/constants";

// компоненты
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";
const CharacterCard = lazy(() => import("../../components/CharacterCard"));

const Characters = memo(() => {
	const dispatch = useDispatch();

	const {status, characters, offset, search} = useSelector((state) => state.characterSliceReducer);
	
	useEffect(() => {
		dispatch(fetchingCharacters({offset: (offset * limit), search}));
	}, [offset, search]);

	// console.log(characters);

	return (
		<section className={styles.characters}>
			<Search/>
			<PulseLoader
				loading={status ? true : false}
				cssOverride={spinnerProps}
				size={100}
				color={spinnerProps.color}
			/>
			<h1 className="header_1"> Персонажи </h1>
			{ !!characters.length &&
				<>
					<Pagination length={62} />
					<div className={styles.flexContainer}>
						{characters.map(({ name, char_id, img, nickname }) => {
							const data = { name, char_id, img, nickname };
							return (
								<Suspense key={char_id}>
									<CharacterCard {...data} />
								</Suspense>
							);
						})}
					</div>
				</>
			}
		</section>
	);
});

export default Characters;
