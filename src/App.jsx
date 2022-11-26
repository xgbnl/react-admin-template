import {useAppRoutes} from "@/router/module/permission.jsx";
import Middleware from "@components/middleware/Middleware.jsx";

const App = () => {
    return useAppRoutes();
}

export default Middleware(App);