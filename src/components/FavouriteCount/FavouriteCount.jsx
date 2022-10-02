import { memo } from "react";
import { MdPerson } from "react-icons/md";

import styles from "./FavouriteCount.module.css";

// хуки
import { useSelector } from "react-redux";

// константы
import { FavouriteCountProps } from "../../constants/constants";

const FavouriteCount = memo(() => {
	const favouriteChars = useSelector((state) => state.favouriteSliceReducer.favouriteChars);

	return (
		<div className={`${styles.MdPersonDiv}`}>
			<MdPerson
				style={
					favouriteChars.length
						? { ...FavouriteCountProps, color: "var(--site-logo-color)" }
						: FavouriteCountProps
				}
			/>
			{favouriteChars.length ? favouriteChars.length : 0}
		</div>
	);
});

export default FavouriteCount;
