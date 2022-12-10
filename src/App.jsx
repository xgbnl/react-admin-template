import Middleware from "@components/Middleware/middleware.jsx";
import Translation from "@components/Translation/index.jsx";

const App = () => {
    return Translation();
}

export default Middleware(App);