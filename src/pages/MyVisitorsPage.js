import Page from '@govuk-react/page';
import LoggedInTopNav from '../components/LoggedInTopNav'

const MyVisitorsPage = (props) => (
  <div id="visitorsPage">
      <Page header={<LoggedInTopNav highlighted='visitorsTopNav' />}
        // beforeChildren={<Breadcrumbs>
        //   <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
        //   My Employees
        // </Breadcrumbs>}
      >
      </Page>
  </div>
);

export default MyVisitorsPage;