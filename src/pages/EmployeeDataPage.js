import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";
import Button from "@govuk-react/button";
import React, { useState, useEffect } from "react";
import axios from "axios";

import LoggedInTopNav from "../components/LoggedInTopNav";
import { useParams } from "react-router-dom";
import EmployeeDetails from "../components/EmployeeDetails";

function EmployeeDataPage() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { employeeId } = useParams();

  const [employeeData, setEmployeeData] = useState([]);
  const [employeeManager, setEmployeeManager] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://zingtech-backend.herokuapp.com/api/employeedata/${employeeId}`
      )
      .then((res) => {
        setEmployeeData(res.data);
      });
  }, []);
  useEffect(() => {
    const managerId = employeeData.manager;
    axios
      .get(
        `https://zingtech-backend.herokuapp.com/api/employeedata/${managerId}`
      )
      .then((res) => {
        setLoading(false);
        setEmployeeManager(res.data);
      });
  }, [employeeData]);

  return (
    <div>
      <Page
        header={<LoggedInTopNav highlighted="employeesTopNav" />}
        beforeChildren={
          <Breadcrumbs>
            <Breadcrumbs.Link id="homePageBreadcrumb" href="/">
              HMRC-HR
            </Breadcrumbs.Link>
            <Breadcrumbs.Link id="employeesBreadcrumb" href="/employees">
              My Employees
            </Breadcrumbs.Link>
            {`${employeeData.firstName} ${employeeData.email}`}
          </Breadcrumbs>
        }
      >
        <Heading>Employee Details</Heading>
        <EmployeeDetails
          employeeData={employeeData}
          loading={loading}
          employeeManager={employeeManager}
        />
      </Page>
    </div>
  );
}

export default EmployeeDataPage;
