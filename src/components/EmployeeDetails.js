import React from "react";
import Table from "@govuk-react/table";
import Link from "@govuk-react/link";

export default function EmployeeDetails({
  employeeData,
  loading,
  employeeManager,
}) {
  const titlesAndIDs = [
    {
      rowName: "Employee ID",
      databaseID: "id",
    },
    {
      rowName: "First Name",
      databaseID: "firstName",
    },
    {
      rowName: "Last Name",
      databaseID: "lastName",
    },
    {
      rowName: "Email",
      databaseID: "email",
    },
    {
      rowName: "Mobile Number",
      databaseID: "mobileNumber",
    },
    {
      rowName: "Address",
      databaseID: "address",
    },
    {
      rowName: "City",
      databaseID: "city",
    },
    {
      rowName: "Postcode",
      databaseID: "postcode",
    },
    {
      rowName: "Next of Kin",
      databaseID: "nextOfKin",
    },
    {
      rowName: "Next of Kin - contact number",
      databaseID: "nextOfKinContactNumber",
    },
    {
      rowName: "Salary Band",
      databaseID: "salaryBand",
    },
    {
      rowName: "Office Location",
      databaseID: "officeLocation",
    },
    {
      rowName: "Position",
      databaseID: "position",
    },
    {
      rowName: "User Type",
      databaseID: "userType",
    },
  ];

  if (loading) return "Loading...";
  return (
    <div>
      <Table id="employeeDataTable">
        {titlesAndIDs.map((row) => (
          <Table.Row>
            <Table.CellHeader>{row.rowName}</Table.CellHeader>
            <Table.Cell>{employeeData[row.databaseID]}</Table.Cell>
          </Table.Row>
        ))}
        <Table.Row>
          <Table.CellHeader>{"Manager"}</Table.CellHeader>
          <Table.Cell>
            <Link
              href={`/employeedata/${employeeManager.id}`}
            >{`${employeeManager.firstName} ${employeeManager.lastName}`}</Link>
          </Table.Cell>
        </Table.Row>
      </Table>
    </div>
  );
}
