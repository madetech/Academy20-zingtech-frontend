import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';

// Our components 
import Profile from '../components/Profile'
import LoggedInTopNav from '../components/LoggedInTopNav'

const NavLink = asNavLinkAnchor(Link);

const MyProfilePage = (props) => (
  <>
  <Page header={
  <LoggedInTopNav highlighted="myProfileTopNav"/> }
  beforeChildren=
    {
      <Breadcrumbs id='myProfileBreadcrumbs'>
        <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
        My Profile
      </Breadcrumbs>
    }
  >
    <Heading>My Profile</Heading>
    {/* <Profile /> */}
  </Page>
</>
);

export default MyProfilePage;