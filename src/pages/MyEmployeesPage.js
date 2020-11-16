import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import Link from '@govuk-react/link';
import Page from '@govuk-react/page';
import Button from '@govuk-react/button';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

import LoggedInTopNav from '../components/LoggedInTopNav';

import EmployeeDataTable from '../components/EmployeeDataTable';

const data = [
  {
      "id": 10000,
      "firstName": "Kristian",
      "lastName": "O'Kane",
      "email": "kokane0@ycombinator.com",
      "mobileNumber": "704-485-9558",
      "address": "981 Bonner Plaza",
      "city": "Laholm",
      "postcode": "312 31",
      "nextOfKin": null,
      "nextOfKinContactNumber": "451-117-8526",
      "salaryBand": 2,
      "officeLocation": null,
      "position": "Dental Hygienist",
      "userType": "employee",
      "manager": 10001
  },
  {
      "id": 10001,
      "firstName": "Carlin",
      "lastName": "Duval",
      "email": "cduval1@usatoday.com",
      "mobileNumber": "834-723-6792",
      "address": "8 Sommers Alley",
      "city": "Belovo",
      "postcode": "442070",
      "nextOfKin": null,
      "nextOfKinContactNumber": "283-844-3503",
      "salaryBand": 5,
      "officeLocation": null,
      "position": "Quality Control Specialist",
      "userType": "employee",
      "manager": 10002
  },
  {
      "id": 10008,
      "firstName": "Agna",
      "lastName": "Harbin",
      "email": "aharbin8@blogtalkradio.com",
      "mobileNumber": "649-447-7811",
      "address": "9 Basil Parkway",
      "city": "Changliu",
      "postcode": null,
      "nextOfKin": null,
      "nextOfKinContactNumber": "333-911-2384",
      "salaryBand": 4,
      "officeLocation": null,
      "position": "Computer Systems Analyst I",
      "userType": "employee",
      "manager": 10009
  }
]



function MyEmployeesPage(props) {

  const [employeeData, setEmployeeData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://zingtech-backend.herokuapp.com/api/employeedata')
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

