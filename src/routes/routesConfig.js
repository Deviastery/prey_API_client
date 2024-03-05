import HomePage from "../containers/HomePage";
import DocPage from "../containers/DocPage";
import NotFoundPage from "../containers/NotFoundPage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/documentation',
        element: <DocPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];

export default routesConfig;