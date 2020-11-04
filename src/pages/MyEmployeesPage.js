import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';
import MUIDataTable from "mui-datatables";

import APIGateway from "../APIGateway.js"

const NavLink = asNavLinkAnchor(Link);

const columns = [
  {
   name: "id",
   label: "Employee ID",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "first_name",
   label: "First Name",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "last_name",
   label: "Last Name",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "employee_type",
   label: "Employee Type",
   options: {
    filter: true,
    sort: false,
   }
  },
 ];
const data = APIGateway.get_employees();

const options = {
    filterType: 'checkbox',
};

const MyEmployeesPage = (props) => (
  <>
  <Page header={
  <TopNav serviceTitle="HMRC-HR">
    <NavLink to={"/"}>
      **********
      UPDATE ME!
      **********

      (Trump Pence 2020)
    </NavLink>
  </TopNav> }
  beforeChildren=
    {
      <Breadcrumbs>
        <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
        My Employees
      </Breadcrumbs>
    }
  >
    <Heading>My Employees</Heading>
    <MUIDataTable 
    title={"Employee List"} 
    data={data} 
    columns={columns} 
    options={options} 
    />
  </Page>
</>
);

export default MyEmployeesPage;

