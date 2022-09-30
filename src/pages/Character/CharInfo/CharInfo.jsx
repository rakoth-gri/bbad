import { lazy, Suspense } from "react";

import styles from "./CharInfo.module.css";

// сервисы
import { translateStatus } from "../../../services/translateStatus";

// компонент
const CharPoster = lazy(() => import("../CharPoster"));

const CharInfo = ({ name, img, nickname, birthday, status, occupation, appearance, portrayed }) => {
	return (
		<article>
			<h3> Имя персонажа: {name} </h3>
			<div className={`row m-3 justify-content-center`}>
				<Suspense fallback={<span> loading...</span>}>
					<CharPoster img={img} />{" "}
				</Suspense>

				<div className={`${styles.bio} col-9 col-md-5 m-2`}>
					<h4 className="my-2"> Ник: {nickname} </h4>
					<span className={`${styles.occupation} my-2`}> Род деятельности: </span>
					<ul className={styles.occupation__ul}>
						{occupation.map((i) => (
							<li key={i}> {i} </li>
						))}
					</ul>
					<span className="my-2"> Дата рождения: {birthday} </span>
					<span className="my-2">
						{" "}
						Текущий статус: <b>{translateStatus(status)} </b>
					</span>
					<p className="text-align-justify">
						Персонаж присутствует в{" "}
						{appearance.map((i) => (
							<strong key={i}> {i}, </strong>
						))}{" "}
						эпизодах сериала.
					</p>
					<p className="text-align-justify">Актер, испольнивший(ая) роль персонажа: {portrayed}</p>
				</div>
			</div>
		</article>
	);
};

export default CharInfo;
