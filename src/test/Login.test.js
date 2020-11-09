import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Login from "../components/Login";

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

it("Login component text exists", () => {
  act(() => {
    render(<Login homepage="/home"/>, container);
  });
  expect(container.textContent).toContain("Email address");
  expect(container.textContent).toContain("Password");
  expect(container.textContent).toContain("Your @gov.uk email address");
  expect(container.textContent).toContain("Login");
});
