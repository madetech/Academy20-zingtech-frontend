import Table from '@govuk-react/table';

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
  "start_date": "22/06/1997",
  "office location": "Chendong"
}

const Profile = (props) => (
  <>
    <Table caption="My Profile">
    <Table.Row>
      <Table.CellHeader>Name</Table.CellHeader>
      <Table.Cell>{`${data.first_name} ${data.last_name}`}</Table.Cell>
    </Table.Row>
    </Table>
  </>
);

export default Profile;

