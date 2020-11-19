import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";

import CreateEmployeeForm from "../components/CreateEmployeeForm";
import LoggedInTopNav from "../components/LoggedInTopNav";
import Axios from "axios";

function CreateNewEmployeePage() {
  function sendToBackend(newEmployeeData) {
    Axios.post(
      "https://zingtech-backend.herokuapp.com/api/employeedata",
      newEmployeeData
    ).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
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
