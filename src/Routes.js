import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/recipedetails',
                element: <RecipeDetails />
            },
        ]
    }
])