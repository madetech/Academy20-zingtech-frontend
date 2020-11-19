import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";

import CreateEmployeeForm from "../components/CreateEmployeeForm";
import LoggedInTopNav from "../components/LoggedInTopNav";
import axios from "axios";

function CreateNewEmployeePage() {
  function sendToBackend(newEmployeeData) {
    console.log(JSON.stringify(newEmployeeData))
    axios.post(
      "https://zingtech-backend.herokuapp.com/api/employeedata",
      newEmployeeData,{
      headers: {"Access-Control-Allow-Origin": "*"}}
    ).then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  }

  return (
    <>
      <Page
        header={<LoggedInTopNav highlighted="employeesTopNav" />}
        beforeChildren={
          <Breadcrumbs>
            <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
            <Breadcrumbs.Link id="employeesBreadcrumb" href="/employees">
              My Employees
            </Breadcrumbs.Link>
            Create New Employee
          </Breadcrumbs>
        }
      >
        <Heading>Create new employee</Heading>
        <CreateEmployeeForm sendToBackend={sendToBackend} />
      </Page>
    </>
  );
}

export default CreateNewEmployeePage;
