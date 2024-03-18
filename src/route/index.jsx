import Layout from "../components/Layout";
import Home from "../features/Home";

export const Routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            }
        ]
    }
]