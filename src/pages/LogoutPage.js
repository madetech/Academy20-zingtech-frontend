import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';

// Our components 
import LogoutButton from '../components/LogoutButton'
import LoggedInTopNav from '../components/LoggedInTopNav'

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const NavLink = asNavLinkAnchor(Link);

const LogoutPage = (props) => (
    <div id="logoutPage">
        <Page header={
            <LoggedInTopNav highlighted="signOutTopNav"/> }
            beforeChildren=
            {
                <Breadcrumbs id='logoutBreadcrumbs'>
                <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
                Logout
                </Breadcrumbs>
            }
        >
        <Heading>Logout</Heading>
        <LogoutButton />
        </Page>
    </div>
);

export default withAuthenticationRequired(LogoutPage, {
    onRedirecting: () => <h1>Loading</h1>,
  });
