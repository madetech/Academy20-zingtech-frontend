import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Link } from "react-router-dom";

import CreateNewVisitorPage from "../pages/CreateNewVisitorPage";


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

it("CreateVisitorForm is rendered", () => {
  act(() => {
    render(
      <BrowserRouter>
        <CreateNewVisitorPage />
      </BrowserRouter>,
      container
    );
  });
  expect(document.getElementById("createVisitorForm")).not.toBeNull();
});
