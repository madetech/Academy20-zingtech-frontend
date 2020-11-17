import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Link } from "react-router-dom";

import EmployeeDataPage from '../pages/EmployeeDataPage'

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

it("EmployeeDataPage contains HMRC-HR", () => {
  act(() => {
    render(<BrowserRouter><EmployeeDataPage/></BrowserRouter>, container) ;
  });
  console.log(document.getElementById('loggedInTopNav'))
  expect(document.getElementById('loggedInTopNav').textContent).toContain("HMRC-HR");
});

