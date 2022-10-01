import { useEffect, lazy, Suspense } from "react";
import BounceLoader from "react-spinners/BounceLoader";

// хуки
import { useDispatch, useSelector } from "react-redux";

// экшены
import { fetchingSearch } from "../../store/charactersSlice/charactersSlice";

// компоненты
import Search from "../../components/Search";
import CharacterCard from "../../components/CharacterCard";

// константы
import { spinnerProps } from "../../constants/constants";

import styles from "./SearchPage.module.css";

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
      
			<Search />
			<section>
				<BounceLoader
					loading={status ? true : false}
					cssOverride={spinnerProps}
					size={100}
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
