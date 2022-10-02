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

// лимит для Пагинации -------->>
export const limit = 9;

// css для Spinner  -------->>
export const spinnerProps = {
    color: "var(--site-default-spinnerColor)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
    textShadow: "var(--site-default-spinnerShadow)",
    border: "3px solid var(--site-default-spinnerColor)",
    zIndex: 10,    
}

// css для Logo -------->>
export const logoProps = {  
    fontSize: "40px",
    color: 'var(--site-logo-color)'
}

// css для BurgerICon -------->>
export const burgerProps = {   
    fontSize: "40px",
    color: 'var(--site-active-color)'
}

// css для FavouriteCountIcon -------->>
export const FavouriteCountProps = {   
    fontSize: "40px",
    color: 'var(--site-default-color)',
    margin: "0 5px",
}

// css для Search icon -------->>
export const searchIconProps = {
    position: "absolute",
    top: "50%",
    right: "7%",
    color: 'var(--site-default-color)',
    transform: 'translate(-7%, -50%)',
    cursor: "pointer"
}

// css для кнопок Пагинации  -------->>
export const pagBtnsProps = { fontSize: "30px", cursor: "pointer"}

// массив для кастомного селекта
export const selectArray = [
    {
        value: "",
        text: "не выбрано"
    },    
    {
        value: "season",
        text: "Сезонам"
    },
    {
        value: "air_date",
        text: "По дате выхода"
    },
]

// Иконка 'ЗВЕЗДА' для избранных персонажей
export const base = {fontSize: 'var(--site-big-fs)', position: 'absolute', top: "6%", right: "11%", zIndex: 10};

// Иконки:  <RiStarSFill/> <RiStarSLine/> 

// ключ локального хранилища
export const favourites = "favourites";


/* <button className={styles.arrows} id="next" onClick={() => dispatch(setOffsetPlus())}>
	вперед
</button>;
<button className={styles.arrows} id="previous" onClick={() => dispatch(setOffsetMinus())}>
	назад
</button>; */