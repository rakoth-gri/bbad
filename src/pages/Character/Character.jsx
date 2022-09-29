import React from "react";

// хуки
import { useParams, useNavigate } from "react-router-dom";

import styles from "./Character.module.css";

const Character = () => {
	const { char_id } = useParams();

	const location = useNavigate();

	return (
		<>
			<div className={styles.back}>
				<button type="button" className="btn btn-primary" onClick={() => location(-1)}>
					&#8592; Вернуться назад
				</button>
			</div>
			<div> Персонаж {char_id}</div>
		</>
	);
};

export default Character;
