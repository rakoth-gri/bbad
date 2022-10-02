import { useEffect, useRef, useMemo, Suspense, lazy } from "react";
import PulseLoader from "react-spinners/ClipLoader";
import styles from "./Episodes.module.css";

// хуки
import { useDispatch, useSelector } from "react-redux/es/exports";

// экшены
import { fetchingEpisodes, closePopup } from "../../store/episodesSlice/episodesSlice";

// константы
import { spinnerProps } from "../../constants/constants";

// сервисы
import { getTimeStamp } from "../../services/getTimeStamp";

// компоненты
import Select from "../../components/Select";
const EpisodeCard = lazy(() => import("../../components/EpisodeCard"));

const Episodes = () => {
	const dispatch = useDispatch();

	const ref = useRef(null);

	const episodes = useSelector((state) => state.episodesSliceReducer.episodes);
	const sortValue = useSelector((state) => state.episodesSliceReducer.sortParams.value);

	let sortedEpisodes = useMemo(() => {
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

	useEffect(() => {
		!episodes.length && dispatch(fetchingEpisodes());
		ref.current?.addEventListener("click", handleClose);
		return () => ref.current?.removeEventListener("click", handleClose);
	}, []);

	return (
		<section ref={ref}>
			<h3> Все эпизоды </h3>
			<Select />
			{!!sortedEpisodes.length ? (
				<div className={`row p-2 my-1 justify-content-center`}>
					{sortedEpisodes.map((item) => (
						<Suspense key={item.episode_id}>
							<EpisodeCard {...item} />
						</Suspense>
					))}
				</div>
			) : (
				<PulseLoader loading={true} cssOverride={spinnerProps} size={100} color={spinnerProps.color} />
			)}
		</section>
	);
};

export default Episodes;
