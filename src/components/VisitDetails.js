import React from "react";
import Table from "@govuk-react/table";
import Link from '@govuk-react/link';
import Moment from 'react-moment';

export default function VisitDetails({ visitData, loading }) {
  if (loading) return "Loading...";
  return (
    <div>
      <Table id="visitDataTable">
        <Table.Row>
          <Table.CellHeader>Visit ID</Table.CellHeader>
          <Table.Cell>{visitData.visitId}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Purpose</Table.CellHeader>
          <Table.Cell>{visitData.visitPurpose}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Office Location</Table.CellHeader>
          <Table.Cell>{visitData.visitOfficeLocation}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Start</Table.CellHeader>
          <Table.Cell><Moment format="HH:MM" >{visitData.visitStartDatetime}</Moment> on <Moment format="DD MMMM YYYY" >{visitData.visitStartDatetime}</Moment></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>End</Table.CellHeader>
          <Table.Cell><Moment format="HH:MM" >{visitData.visitEndDatetime}</Moment> on <Moment format="DD MMMM YYYY" >{visitData.visitEndDatetime}</Moment></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Notes</Table.CellHeader>
          <Table.Cell>{visitData.visitNotes}</Table.Cell>
        </Table.Row>
        <br />
        <h2>Visitor</h2>
        <Table.Row>
          <Table.CellHeader>First Name</Table.CellHeader>
          <Table.Cell>{visitData.visitorFirstName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Last Name</Table.CellHeader>
          <Table.Cell>{visitData.visitorLastName}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Email Address</Table.CellHeader>
          <Table.Cell>
            <Link href={`mailto:${visitData.visitEmail}`}>{visitData.visitEmail}</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Mobile Number</Table.CellHeader>
          <Table.Cell>{visitData.visitorMobileNumber}</Table.Cell>
        </Table.Row>
        <br />
        <h2>Host</h2>
        <Table.Row>
          <Table.CellHeader>Name</Table.CellHeader>
          <Table.Cell>{`${visitData.hostFirstName} ${visitData.hostLastName}`}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Email</Table.CellHeader>
          <Table.Cell>
            <Link href={`mailto:${visitData.hostEmail}`}>{visitData.hostEmail}</Link></Table.Cell>
        </Table.Row>
      </Table>
    </div>
  );
}
