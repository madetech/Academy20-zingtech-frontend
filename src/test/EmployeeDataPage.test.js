import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Link } from "react-router-dom";

import EmployeeDataPage from "../pages/EmployeeDataPage";

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
    render(
      <BrowserRouter>
        <EmployeeDataPage />
      </BrowserRouter>,
      container
    );
  });
  expect(document.getElementById("loggedInTopNav").textContent).toContain(
    "HMRC-HR"
  );
});

it("EmployeeDataPage breadcrumbs contain hmrc", () => {
  act(() => {
    render(
      <BrowserRouter>
        <EmployeeDataPage />
      </BrowserRouter>,
      container
    );
  });
  expect(document.getElementById("homePageBreadcrumb").textContent).toContain(
    "HMRC-HR"
  );
  expect(document.getElementById("homePageBreadcrumb")).toHaveAttribute(
    "href",
    "/"
  );
});

it("EmployeeDataPage breadcrumbs contain employees", () => {
  act(() => {
    render(
      <BrowserRouter>
        <EmployeeDataPage />
      </BrowserRouter>,
      container
    );
  });
  expect(document.getElementById("employeesBreadcrumb").textContent).toContain(
    "My employees"
  );
  expect(document.getElementById("employeesBreadcrumb")).toHaveAttribute(
    "href",
    "/employees"
  );
});
