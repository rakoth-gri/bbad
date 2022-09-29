import { useEffect, useRef, useMemo } from "react";
import PulseLoader from "react-spinners/ClipLoader";
import styles from "./Episodes.module.css";

// хуки
import { useDispatch, useSelector } from "react-redux/es/exports";

// экшены
import { fetchingEpisodes, closePopup } from "../../store/episodesSlice/episodesSlice";

// компоненты
import Select from "../../components/Select";
import EpisodeCard from "../../components/EpisodeCard";

// константы
import { spinnerProps } from "../../constants/constants";

// сервисы
import { getTimeStamp } from "../../services/getTimeStamp";

const Episodes = () => {
	const dispatch = useDispatch();
	const ref = useRef(null);

	useEffect(() => {
		dispatch(fetchingEpisodes());
		ref.current?.addEventListener("click", handleClose);
		return () => ref.current?.removeEventListener("click", handleClose);
	}, []);

	const episodes = useSelector((state) => state.episodesSliceReducer.episodes);
	const sortValue = useSelector((state) => state.episodesSliceReducer.sortParams.value);

	console.log(sortValue);

	let sortedEpisodes = useMemo(() => {
		console.log("memo");

		switch (sortValue) {
			case "air_date":
				return episodes.slice(0).sort((a, b) => getTimeStamp(b[sortValue]) - getTimeStamp(a[sortValue]));
			case "season":
				return episodes.slice(0).sort((a, b) => b[sortValue] - a[sortValue]);
			default:
				return episodes;
		}
	}, [episodes, sortValue]);

	const handleClose = (e) => !e.target.className.includes("sort") && dispatch(closePopup());

	return (
		<section className={styles.episodes} ref={ref}>
			<h1 className="header_1"> Все эпизоды </h1>

			<Select />
			{!!sortedEpisodes.length ? (
				<div className={`row p-2 my-3 justify-content-center`}>
					{sortedEpisodes.map((item) => (
						<EpisodeCard {...item} key={item.episode_id} />
					))}
				</div>
			) : (
				<PulseLoader loading={true} cssOverride={spinnerProps} size={100} color={spinnerProps.color} />
			)}
		</section>
	);
};

export default Episodes;
