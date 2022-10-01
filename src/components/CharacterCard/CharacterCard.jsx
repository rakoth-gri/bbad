import { useState, useMemo, memo, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import styles from "./CharacterCard.module.css";

// хуки
import { useSelector, useDispatch } from "react-redux/es/exports";

// компоненты
import Popover from "./../Popover/Popover";

// экшены
import { toFavourite } from "../../store/favouriteSlice/favouriteSlice.js";

// константы:
import { base } from "../../constants/constants.js";

const CharacterCard = memo(({ name, char_id, img, nickname }) => {
	const [popoverVisiable, setPopoverVisible] = useState(false);

	const favouriteChars = useSelector((state) =>
		state.favouriteSliceReducer.favouriteChars.find((fav) => fav.char_id === char_id)
	);

	const dispatch = useDispatch();

	const favourite = useCallback((e) => dispatch(toFavourite({ name, char_id, img, nickname })), []);

	const popover = useMemo(() => ({ title: "NickName", nickname }), []);

	return (
		<div className={`card ${styles.cardModify} col-9 col-md-5 col-xl-3`} id={char_id}>
			{popoverVisiable && <Popover {...popover} />}
			<RiStarSLine
				style={{ ...base, color: !favouriteChars ? "var(--site-active-color)" : "var(--site-logo-color)" }}
				onClick={favourite}
			/>
			<img
				src={img}
				className={`card-img-top ${styles.imgModify}`}
				alt="portrait"
				onMouseEnter={() => setPopoverVisible(true)}
				onMouseLeave={() => setPopoverVisible(false)}
				loading="lazy"
			/>
			<div className="card-body">
				<p className="card-text">{name}</p>
				<NavLink to={"/characters/" + char_id} className="btn btn-primary">
					Подробнее...
				</NavLink>
			</div>
		</div>
	);
});

export default CharacterCard;
