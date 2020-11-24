import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Link from '@govuk-react/link';
import Page from '@govuk-react/page';

import CreateVisitorForm from '../components/CreateVisitorForm';
import LoggedInTopNav from "../components/LoggedInTopNav";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const CreateNewVisitorPage = () => (
  <>
  <Page
    header={<LoggedInTopNav highlighted="visitorsTopNav" />}
    beforeChildren=
        {
        <Breadcrumbs>
            <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
            <Breadcrumbs.Link href="/visitors">My visitors</Breadcrumbs.Link>
            Create visit
        </Breadcrumbs>
        }
    >
    <Heading>Create new visit</Heading> 
    <CreateVisitorForm />
    </Page>
</>
);



export default withAuthenticationRequired(CreateNewVisitorPage, {
    onRedirecting: () => <h1>Loading</h1>,
});
