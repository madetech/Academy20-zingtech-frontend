import Table from "@govuk-react/table";
import ContentEditable from "react-contenteditable";
import React from "react";

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

class Row extends React.Component {
  constructor(props) {
    super();
    this.contentEditable = React.createRef();
    this.state = {
      value: props.initial_value,
      editing: false,
    };
  }
  render = () => {
    return (
      <>
        <Table.Row>
          <Table.CellHeader>{this.props.field_name}</Table.CellHeader>
          <Table.Cell>
            <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.value}
              disabled={!this.state.editing}
              onChange={this.handleFieldEdit}
            />
          </Table.Cell>
        </Table.Row>
      </>
    );
  };
}

class Profile extends React.Component {
  render = () => {
    return (
      <>
        <Table>
          <Table.Row>
            <Table.CellHeader>Name</Table.CellHeader>
            <Table.Cell>{`${data.first_name} ${data.last_name}`}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Date of Birth</Table.CellHeader>
            <Table.Cell>{data.date_of_birth}</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Home Address</Table.CellHeader>
            <Table.Cell>{data.address}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Contact Details</Table.CellHeader>
            <Table.Cell>
              {data.contact_number}
              <br />
              <br />
              {data.email}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Next of kin</Table.CellHeader>
            <Table.Cell>
              {data.next_of_kin}
              <br />
              <br />
              {data.next_of_kin_contact_number}
            </Table.Cell>
          </Table.Row>
        </Table>
      </>
    );
  };
}

export default Profile;
