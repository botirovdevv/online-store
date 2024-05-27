import Home from "../components/main/Home";
import Backet from "../pages/Backet";
import Search from "../pages/Search";
import Electronics from "../pages/categories/Electronics";
import Jewelery from "../pages/categories/Jewelery";
import Men from "../pages/categories/Men";
import Products from "../pages/categories/Products";
import Woman from "../pages/categories/Woman";

export const routes = [
    {
        path: "/",
        element: <Home/>
    },

    {
        path: "/search",
        element: <Search/>
    },

    {
        path: "/men",
        element: <Men/>
    },

    {
        path: "/women",
        element: <Woman/>
    },

    {
        path: "/electronics",
        element: <Electronics/>
    },

    {
        path: "/jewelery",
        element: <Jewelery/>
    },

    {
        path: "/products",
        element: <Products/>
    },

    {
        path: "/backet",
        element: <Backet/>
    },
]