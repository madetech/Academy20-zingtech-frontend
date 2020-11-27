import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginPage from "../pages/LoginPage";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

xit("Login component is visible", () => {
    act(() => {
        render(<Router><LoginPage/></Router>, container);
    });
    // console.log(container.textContent);
    // console.log(document.getElementById('thislogincomp'));
    // console.log(document.getElementById('password').textContent);
    expect(document.getElementById('thislogincomp')).toBeVisible();
});

xit("Topnav component is visible", () => {
    act(() => {
        render(<Router><LoginPage/></Router>, container);
    });
    // expect(document.getElementById('thislogincomp')).toBeVisible();
});

xit("Topnav sign in link works", () => {
    act(() => {
        render(<Router><LoginPage/></Router>, container);
    });
});

//Test other topnav links
