import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import store, { persistor } from './redux/store/index.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <HashRouter>
                    <ThirdwebProvider>
                        <App />
                    </ThirdwebProvider>
                </HashRouter>
            </Provider>
        </PersistGate>
    </React.StrictMode>
);
