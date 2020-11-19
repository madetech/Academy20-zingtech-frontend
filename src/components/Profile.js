import React,{useState, useEffect} from 'react';
import axios from "axios";

import Table from "@govuk-react/table";
import Link from "@govuk-react/link";


const data = {
  employee_type: "Employee",
  id: 10,
  first_name: "Goraud",
  last_name: "Scibsey",
  contact_number: "07171 794 858",
  address: "5 Union Way",
  email: "gscibsey9@infoseek.co.jp",
  next_of_kin: "San Pedro River Sandmat",
  next_of_kin_contact_number: "07546 555 653",
  salary: "89676.03",
  date_of_birth: "22/06/1997",
  "office location": "Chendong",
};

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);

  // To be updated when authentication implemented
  const currentUser = 10000;

  useEffect(() => {
    setLoading(true);
    axios.get(`https://zingtech-backend.herokuapp.com/api/employeedata/${currentUser}`)
      .then(res => {
        setLoading(false);
        setProfileData(res.data);
      })
    }, [])

  return <>
    <Table>
      <Table.Row>
        <Table.CellHeader>Name</Table.CellHeader>
        <Table.Cell>{`${profileData.firstName} ${profileData.lastName}`}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Date of birth</Table.CellHeader>
        <Table.Cell>31 October 1982</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Home address</Table.CellHeader>
        <Table.Cell>
          {profileData.address}<br />
          {profileData.city}<br />
          {profileData.postcode}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Contact details</Table.CellHeader>
        <Table.Cell>
          {profileData.mobileNumber}
          <br />
          <br />
          <Link href={`mailto:${profileData.email}`}>{profileData.email}</Link>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Next of kin</Table.CellHeader>
        <Table.Cell>
          {profileData.nextOfKin}
          <br />
          <br />
          {profileData.nextOfKinContactNumber}
        </Table.Cell>
      </Table.Row>
    </Table>
  </>
}

export default Profile;
