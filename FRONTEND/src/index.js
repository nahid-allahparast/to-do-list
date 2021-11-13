import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'


ReactDom.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

