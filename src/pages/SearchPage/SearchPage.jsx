import { useEffect, lazy, Suspense } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import styles from "./SearchPage.module.css";
// хуки
import { useDispatch, useSelector } from "react-redux";

// экшены
import { fetchingSearch } from "../../store/charactersSlice/charactersSlice";

// константы
import { spinnerProps } from "../../constants/constants";

// компоненты
import Search from "../../components/Search";
import BtnBack from "../../components/BtnBack";
const CharacterCard = lazy(() => import("../../components/CharacterCard"));

const SearchPage = () => {
	const dispatch = useDispatch();

	const search = useSelector((state) => state.characterSliceReducer.search);
	const searchedCharacters = useSelector((state) => state.characterSliceReducer.characters);
	const status = useSelector((state) => state.characterSliceReducer.status);

	useEffect(() => {
		dispatch(fetchingSearch(search));
	}, [search]);

	return (
		<>
			<BtnBack />
			<Search />
			<section>
				<BounceLoader
					loading={status ? true : false}
					cssOverride={spinnerProps}
					size={50}
					color={spinnerProps.color}
				/>
				{!!searchedCharacters.length && search ? (
					<div className={`${styles.cardContainer} row`}>
						{searchedCharacters.map(({ name, char_id, img, nickname }) => {
							const data = { name, char_id, img, nickname };
							return (
								<Suspense key={char_id}>
									<CharacterCard {...data} />
								</Suspense>
							);
						})}
					</div>
				) : (
					<h3> Введите поисковый запрос </h3>
				)}
			</section>
		</>
	);
};

export default SearchPage;
