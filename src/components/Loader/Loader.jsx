import React from "react";

import style from "./Loader.module.css";

const Loader = () => {
	return (
		<div className="spinner-border text-danger" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	);
};

export default Loader;
