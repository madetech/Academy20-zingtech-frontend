import React from 'react'

import Button from '@govuk-react/button';
import Link from '@govuk-react/link';

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function EmployeeDataTable({data, loading}) {

  const options = {
    filter: false,
    selectableRowsHideCheckboxes: true,
    selectableRowsHeader: false,
    selectableRowsOnClick: false
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
            <Link href={`/employeedata/${data[dataIndex].id}`}><Button>
              Edit
            </Button></Link>
          );
        }
      }
    },
  ];

  const getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          fontSize: 18 
        },
        head: {
          fontSize: 18
        },
      },
    }
  })


  if (loading) return 'loading...'
  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable 
        title={"Employee List"} 
        data={data} 
        columns={columns} 
        options={options} 
        />
      </MuiThemeProvider>
    </div>
  )
}

export default EmployeeDataTable
