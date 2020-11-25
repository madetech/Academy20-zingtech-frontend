import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";
import Button from "@govuk-react/button";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useAuth0 } from "@auth0/auth0-react";

import LoggedInTopNav from "../components/LoggedInTopNav";

import EmployeeDataTable from "../components/EmployeeDataTable";

function MyEmployeesPage(props) {
  const { getAccessTokenSilently } = useAuth0();
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async() => {
    setLoading(true);
    const token = await getAccessTokenSilently();

    axios
      .get("https://zingtech-backend.herokuapp.com/api/employeedata",
      {headers: {'authorization': `Bearer ${token}`}}
      )
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

        <EmployeeDataTable data={employeeData} loading={loading} />
        <br />
        <Link href="/createemployee">
          <Button>Create new employee</Button>
        </Link>
      </Page>
    </>
  );
}

export default MyEmployeesPage;
