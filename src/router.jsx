import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import App from "./App";
import PhoneNumbers from "./pages/PhoneNumbers";

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
        path: "/numeros",
        element: <PhoneNumbers />,
    },
]);
