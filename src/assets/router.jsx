import { createBrowserRouter } from "react-router";
import Mainlayout from "./components/mainlayout/Mainlayout";
import Home from "./components/home/Home";
import Subscription from "./components/subscription/Subscription";
import Team from "./components/team/Team";
import Pizza from "./components/Recipes/Pizza";
import Mango from "./components/Recipes/Mango";
import Cake from "./components/Recipes/Cake";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout/>,
    children:[{
        index: true,
        element: <Home/>
    },
    {
        path:"subscription",
        element: <Subscription/>
    },
    {path:"team",
    element: <Team />
    },
    {
        path:"pizza",
        element:<Pizza/>
    },
    {
        path:"mango",
        element:<Mango/>
    },
    {
        path:"cake",
        element:<Cake />
    }
]

  }
]);
export default router;