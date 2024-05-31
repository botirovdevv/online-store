import Home from "../components/main/Home";
import Backet from "../pages/Backet";
import Search from "../pages/Search";
import Electronics from "../pages/categories/Electronics";
import Jewelery from "../pages/categories/Jewelery";
import Men from "../pages/categories/Men";
import Products from "../pages/categories/Products";
import Woman from "../pages/categories/Woman";
import About from "../pages/about/About";
import Index from "../pages/about/Index";
import ProductDetail from "../pages/ProductDetails";
import NotFound from "../components/not-found/NotFound";

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

    {
        path: "/about",
        element: <Index/>
    },

    {
        path: "/product/:id",
        element: <ProductDetail/>
    },

    {
        path: "*",
        element: <NotFound/>
    }
]