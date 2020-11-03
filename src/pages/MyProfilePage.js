import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';

// Our components 
import Profile from '../components/Profile'

const NavLink = asNavLinkAnchor(Link);

const LoginPage = (props) => (
  <>
  <Page header={
  <TopNav serviceTitle="HMRC-HR">
    <NavLink to={"/"}>
      sign in
    </NavLink>
  </TopNav> }
  beforeChildren=
    {
      <Breadcrumbs>
        <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
       My Profile
      </Breadcrumbs>
    }
  >
    <Heading>My Profile</Heading>
    <Profile />
  </Page>
</>
);

export default LoginPage;