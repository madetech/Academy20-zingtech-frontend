import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Link from '@govuk-react/link';
import Page from '@govuk-react/page';
import PhaseBanner from '@govuk-react/phase-banner';

import UpdateMyProfileForm from '../components/UpdateMyProfileForm';
import LoggedInTopNav from "../components/LoggedInTopNav";

const UpdateMyProfilePage = () => (
  <>
  <Page
    header={<LoggedInTopNav highlighted="myProfileTopNav" />}
    beforeChildren=
        {
        <>
        <Breadcrumbs>
            <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
            <Breadcrumbs.Link href="/home">My profile</Breadcrumbs.Link>
            Update my profile
        </Breadcrumbs>
        <PhaseBanner level="alpha">This feature is unfinished: it gets existing data from the database via the API but does not submit to it.</PhaseBanner>
        </>
        }
    >
    <Heading>Update my profile</Heading> 
    <UpdateMyProfileForm />
    </Page>
</>
);

export default UpdateMyProfilePage;