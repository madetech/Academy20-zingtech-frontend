import React from "react";
import Table from "@govuk-react/table";
import Link from '@govuk-react/link';
import Moment from 'react-moment';

const ReviewForm = (props) => {
  return <Table>
          <h2>About you</h2>
          <Table.Row>
            <Table.CellHeader>First name</Table.CellHeader>
            <Table.Cell>{ props.data.firstName} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Last name</Table.CellHeader>
            <Table.Cell>{ props.data.lastName }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Date of birth</Table.CellHeader>
            <Table.Cell>31 October 1982</Table.Cell>
          </Table.Row>
          <br />

          <h2>Your contact details</h2>
          <Table.Row>
            <Table.CellHeader>Address 1</Table.CellHeader>
            <Table.Cell>{ props.data.address }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Address 2</Table.CellHeader>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>City</Table.CellHeader>
            <Table.Cell>{ props.data.city }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Postcode</Table.CellHeader>
            <Table.Cell>{ props.data.postcode }</Table.Cell>
          </Table.Row>
          <br />

          <h2>Your next of kin</h2>
          <Table.Row>
            <Table.CellHeader>Name</Table.CellHeader>
            <Table.Cell>{ props.data.nextOfKin }</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Contact telephone number</Table.CellHeader>
            <Table.Cell>{ props.data.nextOfKinContactNumber }</Table.Cell>
          </Table.Row>
          <br />
        </Table>
}

export default ReviewForm;
