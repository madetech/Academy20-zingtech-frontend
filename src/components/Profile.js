import Table from '@govuk-react/table';
import { Link } from "react-router-dom";

const data = {
  "employee_type": "Employee",
  "id": 10,
  "first_name": "Goraud",
  "last_name": "Scibsey",
  "contact_number": "07171 794 858",
  "address": "5 Union Way",
  "email": "gscibsey9@infoseek.co.jp",
  "next_of_kin": "San Pedro River Sandmat",
  "next_of_kin_contact_number": "07546 555 653",
  "salary": "£89676.03",
  "date_of_birth": "22/06/1997",
  "office location": "Chendong"
}

const Profile = (props) => (
  <>
    <Table caption="Information we hold about you">
    <Table.Row>
      <Table.CellHeader>Name</Table.CellHeader>
      <Table.Cell>{`${data.first_name} ${data.last_name}`}</Table.Cell>
      <Table.Cell><Link href="#">Change</Link></Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>Date of Birth</Table.CellHeader>
      <Table.Cell>{data.date_of_birth}</Table.Cell>
      <Table.Cell></Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>Home Address</Table.CellHeader>
      <Table.Cell>{data.address}</Table.Cell>
      <Table.Cell><Link href="#">Change</Link></Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>Contact Details</Table.CellHeader>
      <Table.Cell>{data.contact_number}<br/><br/>{data.email}</Table.Cell>
      <Table.Cell><Link href="#">Change</Link></Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>Next of kin</Table.CellHeader>
      <Table.Cell>{data.next_of_kin}<br/><br/>{data.next_of_kin_contact_number}</Table.Cell>
      <Table.Cell><Link href="#">Change</Link></Table.Cell>
    </Table.Row>
    </Table>
  </>
);

export default Profile;

