import { useState, useMemo, memo } from "react";
import { NavLink } from "react-router-dom";

import styles from "./CharacterCard.module.css";

// компоненты
import Popover from "./../Popover/Popover";

const CharacterCard = memo(({ name, char_id, img, nickname }) => {
	const [popoverVisiable, setPopoverVisible] = useState(false);

	const popoverObj = useMemo(() => ({	title: "NickName", nickname}), []);

	return (
		<div className={`card ${styles.cardModify}`} id={char_id}>
			{popoverVisiable && <Popover {...popoverObj} />}
			<img
				src={img}
				className={`card-img-top ${styles.imgModify}`}
				alt="portrait"
				onMouseEnter={() => setPopoverVisible(true)}
				onMouseLeave={() => setPopoverVisible(false)}
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
