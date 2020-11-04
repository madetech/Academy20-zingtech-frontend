import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';

import CreateUpdateForm from '../components/CreateUpdateForm'

const NavLink = asNavLinkAnchor(Link);

const CreateNewEmployeePage = (props) => (
  <>
  <Page header={
  <TopNav serviceTitle="HMRC-HR">
  <NavLink to={"/home"} action="true">
    My profile
  </NavLink>
  <NavLink to={"/employees"}>
    <b style={{color:"#1d70b8"}}>My employees</b>
  </NavLink>
  <NavLink to={"#"}>
    My visitors
  </NavLink>
  <NavLink to={"#"}>
    Sign out
  </NavLink>
</TopNav> }
  beforeChildren=
    {
      <Breadcrumbs>
        <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
        Add New Employee
      </Breadcrumbs>
    }
  >
  <Heading>Create new employee</Heading> 
  <CreateUpdateForm />
  </Page>
</>
);

export default CreateNewEmployeePage;

