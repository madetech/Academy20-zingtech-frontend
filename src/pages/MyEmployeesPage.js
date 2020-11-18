import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Link from '@govuk-react/link';
import Page from '@govuk-react/page';
import Button from '@govuk-react/button';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

import LoggedInTopNav from '../components/LoggedInTopNav';

import EmployeeDataTable from '../components/EmployeeDataTable';

function MyEmployeesPage(props) {

  const [employeeData, setEmployeeData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('/api/employeedata')
    .then(res => {
      setLoading(false)
      setEmployeeData(res.data)
    })
  }, [])
  
  return (
    <>
      <Page header={<LoggedInTopNav highlighted='employeesTopNav' />}
        beforeChildren={<Breadcrumbs>
          <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
          My Employees
        </Breadcrumbs>}
      >
        <Heading>My Employees</Heading>
        
        <EmployeeDataTable data={employeeData} loading={loading} />
        <br />
        <Link href="/createemployee"><Button>Create new employee</Button></Link>
      </Page>
    </>
  );
}

export default MyEmployeesPage;

