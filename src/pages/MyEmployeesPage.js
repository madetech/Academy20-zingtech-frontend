import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";
import Button from "@govuk-react/button";
import React, { useState, useEffect } from "react";
import axios from "axios";

import LoggedInTopNav from "../components/LoggedInTopNav";

import EmployeeDataTable from "../components/EmployeeDataTable";

function MyEmployeesPage(props) {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://zingtech-backend.herokuapp.com/api/employeedata")
      .then((res) => {
        setLoading(false);
        setEmployeeData(res.data);
      });
  }, []);

  return (
    <>
      <Page
        header={<LoggedInTopNav highlighted="employeesTopNav" />}
        beforeChildren={
          <Breadcrumbs>
            <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
            My employees
          </Breadcrumbs>
        }
      >
        <Heading>My employees</Heading>
        <Link href="/createemployee">
          <Button>Create new employee</Button>
        </Link>
        <br />
        <EmployeeDataTable data={employeeData} loading={loading} />
      </Page>
    </>
  );
}

export default MyEmployeesPage;
