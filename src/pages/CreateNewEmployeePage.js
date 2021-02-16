import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";

import CreateEmployeeForm from "../components/CreateEmployeeForm";
import LoggedInTopNav from "../components/LoggedInTopNav";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function CreateNewEmployeePage() {
  const { getAccessTokenSilently } = useAuth0();
  async function sendToBackend(newEmployeeData) {
    
    const token = await getAccessTokenSilently();
    axios
      .post(
        "https://zingtech-backend.herokuapp.com/api/employeedata",
        newEmployeeData,
        {
          headers: { "Access-Control-Allow-Origin": "*", 'authorization': `Bearer ${token}` },
        }
      )
      .then((response) => {
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
            <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
            <Breadcrumbs.Link id="employeesBreadcrumb" href="/employees">
              My employees
            </Breadcrumbs.Link>
            Create new employee
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
