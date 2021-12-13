import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'

import {initStore} from "./store/store";
import {theme} from "./components/Theme";
import {ThemeProvider} from "@mui/material/styles";
const {store, persistor} = initStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <React.StrictMode>
                        <App/>
                    </React.StrictMode>
                </BrowserRouter>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
