import React from "react";
import Table from "@govuk-react/table";

export default function EmployeeDetails({ employeeData, loading }) {
  if (loading) return "Loading...";
  return (
    <div>
      <Table id="employeeDataTable">
        <Table.Row>
          <Table.CellHeader>Employee ID</Table.CellHeader>
          <Table.Cell>{employeeData.id}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>First Name</Table.CellHeader>
          <Table.Cell>{employeeData.firstName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Last Name</Table.CellHeader>
          <Table.Cell>{employeeData.lastName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Email Address</Table.CellHeader>
          <Table.Cell>{employeeData.email}</Table.Cell>
        </Table.Row>
      </Table>
    </div>
  );
}
