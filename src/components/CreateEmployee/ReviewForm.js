import React from 'react';
import Table from '@govuk-react/table';

export default function ReviewForm({employeeObject}) {
  return (
    <Table>
      <h2>Employee</h2>
      <Table.Row>
        <Table.CellHeader>First name</Table.CellHeader>
        <Table.Cell>{ employeeObject.firstName} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Last name</Table.CellHeader>
        <Table.Cell>{ employeeObject.lastName} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Email</Table.CellHeader>
        <Table.Cell>{ employeeObject.email} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Mobile number</Table.CellHeader>
        <Table.Cell>{ employeeObject.mobileNumber} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Address</Table.CellHeader>
        <Table.Cell>{ employeeObject.address} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>City</Table.CellHeader>
        <Table.Cell>{ employeeObject.city} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Postcode</Table.CellHeader>
        <Table.Cell>{ employeeObject.postcode} </Table.Cell>
      </Table.Row>
      <br />
      <h2>Next of kin</h2>
      <Table.Row>
        <Table.CellHeader>Name</Table.CellHeader>
        <Table.Cell>{ employeeObject.nextOfKinName} </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Contact telephone number</Table.CellHeader>
        <Table.Cell>{ employeeObject.nextOfKinContactNumber} </Table.Cell>
      </Table.Row>
      <br />
      <h2>Employment</h2>
      <Table.Row>
        <Table.CellHeader>Salary band</Table.CellHeader>
        <Table.Cell>{ `Band ${employeeObject.salaryBand}` } </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Office location</Table.CellHeader>
        <Table.Cell>{ employeeObject.officeLocation } </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Position</Table.CellHeader>
        <Table.Cell>{ employeeObject.position } </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>User type</Table.CellHeader>
        <Table.Cell>{ employeeObject.userType } </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.CellHeader>Manager</Table.CellHeader>
        <Table.Cell>{ employeeObject.manager } </Table.Cell>
      </Table.Row>
    </Table>
  )
}
