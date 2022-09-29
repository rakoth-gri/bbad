import React from "react";

import styles from "./EpisodeCard.module.css";

const EpisodeCard = ({ episode_id, title, season, episode, air_date }) => {
	return (
		<div className={`${styles.cardModify} card col-10 col-md-5 col-xl-3`} id={episode_id}>
			<div className="card-body">
				<h5 className="card-title"> {title} </h5>
				<p className="card-text"> Эпизод № {episode}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className={`${styles.listModify} list-group-item`}> Сезон: {season} </li>
				<li className={`${styles.listModify} list-group-item`}> Дата выхода: {air_date}</li>
			</ul>
			<a href="#" className="card-link"> Подробнее... </a>
		</div>
	);
};

export default EpisodeCard;
