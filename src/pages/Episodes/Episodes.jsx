import { useEffect, useRef } from "react";
import styles from "./Episodes.module.css";

// хуки
import { useDispatch } from "react-redux/es/exports";

// экшены
import { fetchingEpisodes, closePopup } from "../../store/episodesSlice/episodesSlice";

// компоненты
import Select from "../../components/Select";

const Episodes = () => {
	const dispatch = useDispatch();

	const ref = useRef();

	const handleClose = (e) => !e.target.className.includes("sort") && dispatch(closePopup());

	useEffect(() => {
		dispatch(fetchingEpisodes());
		ref.current?.addEventListener("click", handleClose);
		return () => ref.current?.removeEventListener("click", handleClose);
	}, []);

	return (
		<section className={styles.episodes} ref={ref}>
			<h1 className="header_1"> Все эпизоды </h1>
			<Select />
		</section>
	);
};

export default Episodes;
