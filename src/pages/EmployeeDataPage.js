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
import { useAuth0 } from "@auth0/auth0-react";

function EmployeeDataPage() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { employeeId } = useParams();

  const [employeeData, setEmployeeData] = useState([]);
  const [employeeManager, setEmployeeManager] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getEmployeeData() {
      setLoading(true);
      const token = await getAccessTokenSilently();
      axios
        .get(
          `https://zingtech-backend.herokuapp.com/api/employeedata/${employeeId}`,
          {headers: {'authorization': `Bearer ${token}`}}
        )
        .then((res) => {
          setEmployeeData(res.data);
        })
    }
    getEmployeeData();
  }, []);
  useEffect(() => {
    async function getManagerData() {
      if (employeeData.manager != null) {
      const token = await getAccessTokenSilently();
      axios
        .get(
          `https://zingtech-backend.herokuapp.com/api/employeedata/${employeeData.manager}`,
          {headers: {'authorization': `Bearer ${token}`}}
        )
        .then((res) => {
          setLoading(false);
          setEmployeeManager(res.data);
        });
      } else {
        setLoading(false);
        setEmployeeManager(false);
      }
    }
    getManagerData();
    
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
              My employees
            </Breadcrumbs.Link>
            {`${employeeData.firstName} ${employeeData.lastName}`}
          </Breadcrumbs>
        }
      >
        <Heading>Employee details</Heading>
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
