import React from "react";

import styles from "./CharPoster.module.css";

const CharPoster = ({img}) => {
	return (
		<div className={`${styles.img} col-10 col-md-5 m-2`}>
			<img src={img} alt="poster" loading="lazy" />
		</div>
	);
};

export default CharPoster;
