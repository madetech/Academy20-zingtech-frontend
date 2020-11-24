import Page from '@govuk-react/page';
import LoggedInTopNav from '../components/LoggedInTopNav'
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Heading from '@govuk-react/heading';
import Button from '@govuk-react/button';
import Link from '@govuk-react/link';

import VisitDataTable from '../components/VisitDataTable';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const MyVisitorsPage = (props) => {

  const [visitData, setVisitData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://zingtech-backend.herokuapp.com/api/visitdata')
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
          My visitors
        </Breadcrumbs>}
      >
        <Heading>My visitors</Heading>
        <Link href="/createvisit"><Button id="createNewVisitButton">Create new visit</Button></Link>
        <VisitDataTable data={visitData} loading={loading} />
      </Page>
  </div>
  )
}

export default withAuthenticationRequired(MyVisitorsPage, {
  onRedirecting: () => <h1>Loading</h1>,
});
