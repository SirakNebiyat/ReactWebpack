import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./app";
const render = (Component: React.SFC) => {
    ReactDOM.render(
        <Component />,
        document.getElementById("app") as HTMLElement,
    );
};
render(App);