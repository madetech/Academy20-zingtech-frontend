import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';

// Our components 
import Profile from '../components/Profile'
import LoggedInTopNav from '../components/LoggedInTopNav'

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const NavLink = asNavLinkAnchor(Link);

const MyProfilePage = (props) => (
  <div id="myProfilePage">
    <Page header={
    <LoggedInTopNav highlighted="myProfileTopNav"/> }
    beforeChildren=
      {
        <Breadcrumbs id='myProfileBreadcrumbs'>
          <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
          My profile
        </Breadcrumbs>
      }
    >
      <Heading>My profile</Heading>
      {<Profile />}
    </Page>
  </div>
);

export default withAuthenticationRequired(MyProfilePage, {
  onRedirecting: () => <h1>Loading</h1>,
});
