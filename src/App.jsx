import defaultRoutes from "@/route/index.jsx";
import {useState,useEffect} from "react";
import {useRoutes} from "react-router-dom";
import { deepinCopy } from "./utils/deepinCopy";
import { handelFilterElement,handelEnd } from "./utils/effect";
import menus from "./mock/menus";

const App = () => {
    const [routes,setRoutes] = useState(defaultRoutes);

    const element = useRoutes(routes)

    useEffect(() => {

        const end = handelEnd(handelFilterElement(deepinCopy()))
        setRoutes(end);
    });

    return (
        <div className="app">
            {element}
        </div>
    );
}

export default App;