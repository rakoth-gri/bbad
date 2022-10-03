import React from "react";

import styles from "./Poster.module.css";

const Poster = () => {
	return (
		<div className={`${styles.poster}`}>
			<img src="./assets/poster.jpg" alt="" className={styles.posterImg} loading="lazy"/>
		</div>
	);
};

export default Poster;
