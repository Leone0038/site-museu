import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import App from "./App";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import News from "./pages/News";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/sobre",
        element: <AboutPage />,
    },
    {
        path: "/contatos",
        element: <Contacts />,
    },
    {
        path: "/acervo",
        element: <Gallery />,
    },
    {
        path: "/noticias",
        element: <News />,
    },
]);
