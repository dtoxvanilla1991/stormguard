import HomePage from "../pages/home";

import NotFoundPage from "../pages/404";
import LoadingScreen from "../pages/loading";
import SearchPage from "../pages/search";

var routes = [
  {
    path: "/",
    component: LoadingScreen,
  },
  {
    path: "/weather",
    component: HomePage,
  },
  {
    path: "/search",
    component: SearchPage,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
