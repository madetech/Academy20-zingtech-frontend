import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Link from '@govuk-react/link';
import Page from '@govuk-react/page';

import UpdateMyProfileForm from '../components/UpdateMyProfileForm';
import LoggedInTopNav from "../components/LoggedInTopNav";

const UpdateMyProfilePage = () => (
  <>
  <Page
    header={<LoggedInTopNav highlighted="myProfileTopNav" />}
    beforeChildren=
        {
        <Breadcrumbs>
            <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
            <Breadcrumbs.Link href="/home">My profile</Breadcrumbs.Link>
            Update my profile
        </Breadcrumbs>
        }
    >
    <Heading>Update my profile</Heading> 
    <UpdateMyProfileForm />
    </Page>
</>
);

export default UpdateMyProfileForm;