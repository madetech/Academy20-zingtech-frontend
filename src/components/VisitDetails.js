import React from "react";
import Table from "@govuk-react/table";

export default function VisitDetails({ visitData, loading }) {
  if (loading) return "Loading...";
  return (
    <div>
      <Table id="visitDataTable">
        <Table.Row>
          <Table.CellHeader>Visit ID</Table.CellHeader>
          <Table.Cell>{visitData.id}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Visitor First Name</Table.CellHeader>
          <Table.Cell>{visitData.firstName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Visitor Last Name</Table.CellHeader>
          <Table.Cell>{visitData.lastName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Visitor Email Address</Table.CellHeader>
          <Table.Cell>{visitData.email}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Visitor Mobile Number</Table.CellHeader>
          <Table.Cell>{visitData.mobileNumber}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Office Location</Table.CellHeader>
          <Table.Cell>{visitData.officeLocation}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Purpose</Table.CellHeader>
          <Table.Cell>{visitData.purpose}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Notes</Table.CellHeader>
          <Table.Cell>{visitData.notes}</Table.Cell>
        </Table.Row>
      </Table>
    </div>
  );
}
