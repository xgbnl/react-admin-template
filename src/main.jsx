import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import '@assets/styles/index.scss';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {store,persistor} from "@/store/store.js";

const root = createRoot(document.getElementById('root'));

root.render(
    // <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                        <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    // </StrictMode>
)
