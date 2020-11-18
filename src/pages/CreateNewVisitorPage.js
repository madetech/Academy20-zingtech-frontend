import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import Link from '@govuk-react/link';
import Page from '@govuk-react/page';

import VisitorCreateUpdateForm from '../components/VisitorCreateUpdateForm'
import LoggedInTopNav from "../components/LoggedInTopNav";

const NavLink = asNavLinkAnchor(Link);

const CreateNewVisitorPage = (props) => (
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
    <VisitorCreateUpdateForm />
    </Page>
</>
);

export default CreateNewVisitorPage;

