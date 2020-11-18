import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Link } from "react-router-dom";

import EmployeeDetails from "../components/EmployeeDetails";

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

const testData = {
  id: 10009,
  firstName: "Nelle",
  lastName: "Ronayne",
  email: "nronayne9@com.com",
  mobileNumber: "637-644-2525",
  address: "264 Homewood Point",
  city: "Newmarket",
  postcode: "L9N",
  nextOfKinName: "Eastern Marsh Fern",
  nextOfKinContactNumber: "815-981-1579",
  salaryBand: 4,
  "officeLocation ": "Canada",
  position: "Marketing Assistant",
  userType: "employee",
  manager: 10010,
};

it("EmployeeDetails table exists when loading is false", () => {
  act(() => {
    render(
      <BrowserRouter>
        <EmployeeDetails employeeData={testData} loading={false} />
      </BrowserRouter>,
      container
    );
  });
  expect(document.getElementById("employeeDataTable")).not.toBeNull();
});

it("EmployeeDetails table doesn't exists when loading is true", () => {
  act(() => {
    render(
      <BrowserRouter>
        <EmployeeDetails employeeData={testData} loading={true} />
      </BrowserRouter>,
      container
    );
  });
  expect(document.getElementById("employeeDataTable")).toBeNull();
});
