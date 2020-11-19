import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Link from '@govuk-react/link';
import Page from '@govuk-react/page';

import CreateVisitorForm from '../components/CreateVisitorForm';
import LoggedInTopNav from "../components/LoggedInTopNav";

const CreateNewVisitorPage = () => (
  <>
  <Page
    header={<LoggedInTopNav highlighted="visitorsTopNav" />}
    beforeChildren=
        {
        <Breadcrumbs>
            <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
            <Breadcrumbs.Link href="/visitors">My Visitors</Breadcrumbs.Link>
            Create visit
        </Breadcrumbs>
        }
    >
    <Heading>Create new visit</Heading> 
    <CreateVisitorForm />
    </Page>
</>
);

export default CreateNewVisitorPage;

