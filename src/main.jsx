import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {StrictMode} from "react";
import App from './App';
import '@assets/styles/index.scss';
import {Provider} from "react-redux";
import store from "@/app/store.js";

const root = createRoot(document.getElementById('root'));

root.render(
    // <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </Provider>
    // </StrictMode>
)
