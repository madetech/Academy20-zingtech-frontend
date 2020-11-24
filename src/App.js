import logo from "./logo.svg";
import "./App.css";

import React, { Fragment } from "react";

// Gov.UK React components
import Page from "@govuk-react/page";
import { H1 } from "@govuk-react/heading";
import Footer from "@govuk-react/footer";
import Table from "@govuk-react/table";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Our components
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import MyProfilePage from "./pages/MyProfilePage";
import MyEmployeesPage from "./pages/MyEmployeesPage";
import CreateNewEmployeePage from "./pages/CreateNewEmployeePage";
import EmployeeDataPage from "./pages/EmployeeDataPage";
import MyVisitorsPage from "./pages/MyVisitorsPage";
import VisitDataPage from "./pages/VisitDataPage";
import CreateNewVisitorPage from "./pages/CreateNewVisitorPage";

import ProtectedRoute from "./auth/protected-route";

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <ProtectedRoute
          exact
          path="/signout"
          component={LogoutPage}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/home"
          component={MyProfilePage}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/employees"
          component={MyEmployeesPage}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/createemployee"
          component={CreateNewEmployeePage}
        ></ProtectedRoute>
        <ProtectedRoute
          path={`/employeedata/:employeeId`}
          component={EmployeeDataPage}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/visitors"
          component={MyVisitorsPage}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/createvisit"
          component={CreateNewVisitorPage}
        ></ProtectedRoute>
        <ProtectedRoute
          path={`/visitors/:visitId`}
          component={VisitDataPage}
        ></ProtectedRoute>

        <Footer
          meta={
            <Footer.MetaCustom>
              Built by the Bristol ZingTech as a learning experience
            </Footer.MetaCustom>
          }
        />
      </Fragment>
    </Router>
  );
}

export default App;
