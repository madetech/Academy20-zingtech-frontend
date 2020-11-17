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
            !!!!!!********EmployeeName****!!!!!
          </Breadcrumbs>
        }
      >
        <Table>
          <Table.RowHeader>
            <Table.Cell>First 6 weeks</Table.Cell>
            <Table.Cell>£10.80 per week</Table.Cell>
          </Table.RowHeader>
          <Table.Row>
            <Table.Cell>First 6 weeks</Table.Cell>
            <Table.Cell>£10.80 per week</Table.Cell>
          </Table.Row>
        </Table>
      </Page>
    </div>
  );
}

export default EmployeeDataPage;
