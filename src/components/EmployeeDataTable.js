import React from 'react'
import MUIDataTable from "mui-datatables";

function EmployeeDataTable({data, loading}) {

  const options = {
    filterType: 'checkbox',
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
  ];

  if (loading) return 'loading...'
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
