import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MyVisitorsPage from "../pages/MyVisitorsPage";

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

it("MyVisitors page is rendered", () => {
    act(() => {
        render(<Router><MyVisitorsPage/></Router>, container);
    });
    expect(document.getElementById('visitorsPage')).toBeVisible();
});

it("MyVisitors page contains navigation elements", () => {
    act(() => {
        render(<Router><MyVisitorsPage/></Router>, container);
    });
    expect(document.getElementById('loggedInTopNav')).toBeVisible();
});

it("MyVisitorsPage contains breadcrumbs", () => {
    act(() => {
        render(<Router><MyVisitorsPage/></Router>, container);
    });
    expect(document.getElementById('existingVisitBreadcrumbs').textContent).toContain("HomeMy Visitors");
});