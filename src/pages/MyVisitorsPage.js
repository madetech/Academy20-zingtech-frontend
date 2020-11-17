import Page from '@govuk-react/page';
import LoggedInTopNav from '../components/LoggedInTopNav'
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Heading from '@govuk-react/heading';

const MyVisitorsPage = (props) => (
  <div id="visitorsPage">
      <Page header={<LoggedInTopNav highlighted='visitorsTopNav' />}
        beforeChildren={<Breadcrumbs id="existingVisitBreadcrumbs">
          <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
          My Visitors
        </Breadcrumbs>}
      >
        <Heading>My Visitors</Heading>
      </Page>
  </div>
);

export default MyVisitorsPage;