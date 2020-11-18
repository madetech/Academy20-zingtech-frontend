import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Link } from "react-router-dom";

import CreateEmployeeForm from "../components/CreateEmployeeForm";


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

const testManagerData = {
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

it("CreateEmployeeForm exists", () => {
  act(() => {
    render(
      <BrowserRouter>
        <CreateEmployeeForm />
      </BrowserRouter>,
      container
    );
  });
  expect(document.getElementById("employeeInformation")).not.toBeNull();
});
