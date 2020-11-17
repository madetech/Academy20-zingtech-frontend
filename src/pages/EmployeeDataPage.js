import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";
import Button from "@govuk-react/button";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@govuk-react/table";

import LoggedInTopNav from "../components/LoggedInTopNav";
import { useParams } from "react-router-dom";

function EmployeeDataPage() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { employeeId } = useParams();

  const [employeeData, setEmployeeData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`/api/employeedata/${employeeId}`)
    .then(res => {
      setLoading(false)
      setEmployeeData(res.data)
    })
  }, [])

  if (loading) return "Loading..."
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
        <Table id="employeeDataTable" >
          <Table.Row>
            <Table.CellHeader>Employee ID</Table.CellHeader>
            <Table.Cell>{employeeData.id}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>First Name</Table.CellHeader>
            <Table.Cell>{employeeData.firstName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Last Name</Table.CellHeader>
            <Table.Cell>{employeeData.lastName}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Email Address</Table.CellHeader>
            <Table.Cell>{employeeData.email}</Table.Cell>
          </Table.Row>
        </Table>
      </Page>
    </div>
  );
}

export default EmployeeDataPage;
