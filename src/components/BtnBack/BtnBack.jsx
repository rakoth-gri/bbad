import React from "react";

import styles from "./BtnBack.module.css"

// хуки
import { useNavigate } from 'react-router-dom';

const BtnBack = () => {

    const location = useNavigate()

	return (
		<div className={styles.back}>
			<button type="button" className={`btn btn-primary ${styles.btnModify}`} onClick={() => location(-1)}>
				&#8592; Вернуться назад
			</button>
		</div>
	);
};

export default BtnBack;
