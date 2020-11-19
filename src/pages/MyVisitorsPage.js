import Page from '@govuk-react/page';
import LoggedInTopNav from '../components/LoggedInTopNav'
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Heading from '@govuk-react/heading';

import VisitDataTable from '../components/VisitDataTable';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

const MyVisitorsPage = (props) => {

  const [visitData, setVisitData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://cors-anywhere.herokuapp.com/https://zingtech-backend.herokuapp.com/api/visitdata')
      .then(res => {
        setLoading(false);
        setVisitData(res.data.data);
      })
  }, [])

  return (
  <div id="visitorsPage">
      <Page header={<LoggedInTopNav highlighted='visitorsTopNav' />}
        beforeChildren={<Breadcrumbs id="existingVisitBreadcrumbs">
          <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
          My Visitors
        </Breadcrumbs>}
      >
        <Heading>My visitors</Heading>
        <VisitDataTable data={visitData} loading={loading} />
      </Page>
  </div>
  )
}

export default MyVisitorsPage;