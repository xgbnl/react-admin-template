import { useAppRoutes } from "./route";

const App = () => {
    return (
        <div className="app">
           {useAppRoutes()}
        </div>
    );
}

export default App;