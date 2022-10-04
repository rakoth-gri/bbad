import { lazy, Suspense } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import styles from "./Main.module.css";

// константы
import { awards, spinnerProps } from "../../constants/constants";

// компоненты
const Poster = lazy(() => import("../../components/Poster"));

const Main = () => {
	return (
		<>
			<h1 className={`${styles.header_1} my-3`}> Проект "Во все тяжкие" </h1>
			<Suspense fallback={<ClockLoader style={spinnerProps}/>}>
				<Poster />
			</Suspense>

			<blockquote
				cite="https://ru.wikipedia.org/wiki/%D0%92%D0%BE_%D0%B2%D1%81%D0%B5_%D1%82%D1%8F%D0%B6%D0%BA%D0%B8%D0%B5"
				className="m-3 p-2"
			>
				<p className="m-3 p-2">
					Данный ресурс посвящен культовому американскому сериалу{" "}
					<cite style={{ color: "var(--site-logo-color)" }}>"Во все тяжкие"</cite>, рассказывающему о история
					Уолтера Уайта, школьного учителя, у которого диагностировали неоперабельный рак лёгких. Вместе со
					своим бывшим учеником Джесси Пинкманом он начинает производить и продавать метамфетамин, чтобы
					обеспечить финансовое будущее своей семьи...
				</p>
				<p className="m-3 p-2">
					«Во все тяжкие» завоевал широкое признание критиков, получил высокие оценки и был признан одним из
					лучших американских телесериалов.{" "}
				</p>
				
				<p className="m-3 p-2"> Сериал был удостоен множества наград, среди которых:</p>
				<ul>
					{awards.map((i) => (
						<li key={i}>
							<em>{i}</em>
						</li>
					))}
				</ul>{" "}
				<p className="m-3 p-2">
					За исполнение главной роли Брайан Крэнстон получил четыре премии «Эмми» за лучшую мужскую роль в
					драматическом телесериале. Аарон Пол был трижды награждён премией «Эмми» за лучшую мужскую роль
					второго плана. Анна Ганн была дважды отмечена премией «Эмми» за лучшую женскую роль второго плана.
				</p>
			</blockquote>
		</>
	);
};

export default Main;
