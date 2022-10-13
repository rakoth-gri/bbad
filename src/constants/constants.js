// ссылки в главном меню -------->>
export const menuLinks = [
	{
		to: "/",
		text: "главная",
		number: 0,
	},
	{
		to: "/characters",
		text: "персонажи",
		number: 1,
	},
	{
		to: "/episodes",
		text: "эпизоды",
		number: 2,
	},
	{
		to: "/about",
		text: "о проекте",
		number: 3,
	},
	{
		to: "/search",
		text: "поиск",
		number: 4,
	},
	{
		to: "/favourite",
		text: "избранное",
		number: 5,
	},	
];

// ПАГИНАЦИЯ ----------------->>>>>>>>>>>>>>>>>
// лимит для Пагинации -------->>
export const limit = 9;

// css для кнопок Пагинации  -------->>
export const pagBtnsProps = { fontSize: "30px", cursor: "pointer" };

// СПИННЕРЫ ----------------------------->>>>
// css для Spinner  -------->>
export const spinnerProps = {
	color: "var(--site-default-spinnerColor)",
	position: "absolute",
	top: "20%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	zIndex: 10,
};

// ИКОНКИ ----------------------------->>>>
// css для Logo -------->>
export const logoProps = {
	fontSize: "40px",
	color: "var(--site-logo-color)",
};

// css для BurgerICon -------->>
export const burgerProps = {
	fontSize: "40px",
	color: "var(--site-active-color)",
};

// css для FavouriteCountIcon -------->>
export const FavouriteCountProps = {
	fontSize: "40px",
	color: "var(--site-default-color)",
	display: "block",
};

// css для иконки для избранных персонажей
export const base = { fontSize: "var(--site-big-fs)", position: "absolute", top: "6%", right: "11%", zIndex: 10 };

// css для Search icon -------->>
export const searchIconProps = {
	position: "absolute",
	top: "50%",
	right: "7%",
	color: "var(--site-default-color)",
	transform: "translate(-7%, -50%)",
	cursor: "pointer",
};

// массив для кастомного селекта
export const selectArray = [
	{
		value: "",
		text: "по-умолчанию:",
	},
	{
		value: "season",
		text: "Сезоны:",
	},
	{
		value: "air_date",
		text: "Дата выхода:",
	},
];

// Иконки:  <RiStarSFill/> <RiStarSLine/>

// ключ локального хранилища
export const favourites = "favourites";
export const authKey = "auth";

// AWARDS -------------------->>>>>
// Main Page
export const awards = [
	"16 прайм-таймовых премий «Эмми»",
	"два «Золотых глобуса»",
	"пять премий Гильдии киноактёров США",
	"шесть премий Гильдии сценаристов США",
	"две премии Гильдии режиссёров Америки",
	"две премии Гильдии продюсеров США",
	"восемь премий «Спутник»",
	"одна BAFTA",
	"пять премий Ассоциации телевизионных критиков",
	"шесть премий «Выбор телевизионных критиков»",
];
