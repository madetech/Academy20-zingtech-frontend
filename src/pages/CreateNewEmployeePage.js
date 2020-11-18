import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";

import CreateEmployeeForm from "../components/CreateEmployeeForm";
import LoggedInTopNav from "../components/LoggedInTopNav";

const CreateNewEmployeePage = (props) => (
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
      <CreateEmployeeForm />
    </Page>
  </>
);

export default CreateNewEmployeePage;
