import BodyContainer from "./BodyContainer/BodyContainer";
import NotFoundPage from "./NotFoundPage/NotFoundPage";


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <BodyContainer />,
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />,
    },
];

export default routes;
