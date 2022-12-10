import Middleware from "@components/Middleware/middleware.jsx";
import Translation from "@components/Translation/index.jsx";
import {useAppRoutes} from "@/router/module/permission.jsx";

const App = () => {
    return <Translation>{useAppRoutes()}</Translation>;
}

export default Middleware(App);