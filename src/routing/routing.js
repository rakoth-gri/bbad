// импортируем компоненты
import Main from "../pages/Main";
import Characters from "../pages/Characters";
import Character from "../pages/Character";
import Episodes from "../pages/Episodes";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import SearchPage from "../pages/SearchPage";


// создаем массив роутов
export const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/characters",
        component: Characters,
    },
    {
        path: "/characters/:char_id",
        component: Character,
    },
    {
        path: "/episodes",
        component: Episodes,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/search",
        component: SearchPage,
    },
    {
        path: "*",
        component: NotFound,
    }
];

