import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],    
    },
]);

export default router;