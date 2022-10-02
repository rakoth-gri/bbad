import React from "react";

import styles from "./Favourite.module.css";

// хуки
import { useSelector } from "react-redux";

// компоненты
import CharacterCard from "../../components/CharacterCard";

const Favourite = () => {
	const favouriteChars = useSelector((state) => state.favouriteSliceReducer.favouriteChars);

	return (
		<>
			<h3>Favourite</h3>
			<div className={`${styles.cardContainer} row`}>
				{favouriteChars.length ? (
					favouriteChars.map((fav) => <CharacterCard {...fav} key={fav.char_id} />)
				) : (
					<h4> Вы не добавили персонажей в избранное! </h4>
				)}
			</div>
		</>
	);
};

export default Favourite;
