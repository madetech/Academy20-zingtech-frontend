import React from 'react'
import MUIDataTable from "mui-datatables";
import Button from '@govuk-react/button';
import Link from '@govuk-react/link';

function EmployeeDataTable({data, loading}) {

  const options = {
    filter: false,
    selectableRowsHideCheckboxes: true,
    selectableRowsHeader: false,
    selectableRowsOnClick: true,
    textLabels: {
      body: {
          noMatch: loading ?
              'Loading...' :
              'Sorry, there is no matching data to display',
      }
    }
  };

  const columns = [
    {
    name: "id",
    label: "Employee ID",
    options: {
      filter: true,
      sort: true,
      }
    },
    {
    name: "firstName",
    label: "First Name",
    options: {
      filter: false,
      sort: false,
      }
    },
    {
    name: "lastName",
    label: "Last Name",
    options: {
      filter: true,
      sort: false,
      }
    },
    {
    name: "userType",
    label: "Employee Type",
    options: {
      filter: true,
      sort: false,
      }
    },
    {
      name: "Edit",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Link href={`/employeedata/${data[dataIndex].id}`}><Button onClick={() => window.alert(`Clicked "Edit" for row ${rowIndex} with dataIndex of ${data[dataIndex].id}`)}>
              Edit
            </Button></Link>
          );
        }
      }
    },
  ];

  return (
    <div>
      <MUIDataTable 
      title={"Employee List"} 
      data={data} 
      columns={columns} 
      options={options} 
      />
    </div>
  )
}

export default EmployeeDataTable
