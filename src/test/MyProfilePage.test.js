import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Link } from "react-router-dom";

import MyProfilePage from '../pages/MyProfilePage'

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

it("MyProfilePage contains HMRC-HR", () => {
  act(() => {
    render(<BrowserRouter><MyProfilePage props=""/></BrowserRouter>, container) ;
  });
  expect(container.textContent).toContain("HMRC-HR");
});

it("MyProfilePage has breadcrumbs", () => {
    act(() => {
      render(<BrowserRouter><MyProfilePage props=""/></BrowserRouter>, container) ;
    });
    expect(document.getElementById('myProfileBreadcrumbs')).toBeInTheDocument()
  });