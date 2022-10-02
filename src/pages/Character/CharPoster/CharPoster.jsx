import React from "react";

import styles from "./CharPoster.module.css";

const CharPoster = ({img}) => {
	return (
		<div className={`${styles.img} col-11 col-md-6 col-xl-5 m-2`}>
			<img src={img} alt="poster" loading="lazy" />
		</div>
	);
};

export default CharPoster;
