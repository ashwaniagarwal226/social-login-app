import SocialLogin from "./Login/SocialLogin";
import HomePage from "./Login/HomePage";

const routes = [
    {
        path: "/",
        exact: true,
        component: SocialLogin
    },
    {
        path: "/home",
        component: HomePage
    }

];

export default routes;