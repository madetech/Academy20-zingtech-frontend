import React from 'react'
import MUIDataTable from "mui-datatables";
import Button from '@govuk-react/button';
import Link from '@govuk-react/link';

function VisitDataTable({data, loading}) {

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
      },
  },
  };
  const columns = [
    {
    name: "id",
    label: "Visit ID",
    options: {
      filter: true,
      sort: true,
      }
    },
    {
    name: "firstName",
    label: "Visitor First Name",
    options: {
      filter: true,
      sort: true,
      }
    },
    {
    name: "lastName",
    label: "Visitor Last Name",
    options: {
      filter: true,
      sort: true,
      }
    },
    {
    name: "startDatetime",
    label: "Visit Start",
    options: {
      type: "date",
      filter: true,
      sort: true,
      }
    },
    {
      name: "endDatetime",
      label: "Visit End",
      options: {
        type: "date",
        filter: true,
        sort: true,
        }
    },
    {
      name: "officeLocation",
      label: "Office Location",
      options: {
        filter: true,
        sort: true,
        }
    },
    {
      name: "host",
      label: "Host ID",
      options: {
        filter: true,
        sort: true,
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
            <Link href={`/visitors/${data[dataIndex].id}`}><Button >
              Edit
            </Button></Link>
          );
        }
      }
    },
  ];

  return (
    <div id="visitDataTable">
      <MUIDataTable 
      title={"Visitor List"} 
      data={data} 
      columns={columns} 
      options={options} 
      />
    </div>
  )
}

export default VisitDataTable
