import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Page from '@govuk-react/page';
import LeadParagraph from '@govuk-react/lead-paragraph';
import Button from '@govuk-react/button';
import Link from '@govuk-react/link';

// Our components 
import Profile from '../components/Profile'
import LoggedInTopNav from '../components/LoggedInTopNav'

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
      <LeadParagraph> Use this page to view and update information we hold about you. </LeadParagraph>
      <Profile />
      <Link href="/myprofile/update"><Button>Update my profile</Button></Link>
    </Page>
  </div>
);

export default MyProfilePage;