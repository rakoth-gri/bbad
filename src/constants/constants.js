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
    width: "90%",
    fontSize: "40px",
    color: 'var(--site-logo-color)'
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
        text: "Без параметров"
    },
    {
        value: "episode_id",
        text: "Эпизодам"
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

/* <button className={styles.arrows} disabled={false} id="next" onClick={() => dispatch(setOffsetPlus())}>
	вперед
</button>;
<button className={styles.arrows} id="previous" disabled={false} onClick={() => dispatch(setOffsetMinus())}>
	назад
</button>; */