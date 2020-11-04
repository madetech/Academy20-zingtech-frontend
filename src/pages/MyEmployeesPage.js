import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';
import MUIDataTable from "mui-datatables";

const NavLink = asNavLinkAnchor(Link);

const columns = ["Name", "Company", "City", "State"];

const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];

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

