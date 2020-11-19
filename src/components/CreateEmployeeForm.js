import React, { useState, useEffect } from "react";

import InputField from "@govuk-react/input-field";
import Fieldset from "@govuk-react/fieldset";
import DateField from "@govuk-react/date-field";
import Button from "@govuk-react/button";

const emptyEmployeeObject = {
  firstName: null,
  lastName: null,
  email: null,
  mobileNumber: null,
  address: null,
  city: null,
  postcode: null,
  nextOfKinName: null,
  nextOfKinContactNumber: null,
  salaryBand: null,
  officeLocation: null,
  position: null,
  userType: null,
  manager: null,
};

function CreateEmployeeForm({ sendToBackend }) {
  const [employeeObject, setEmployeeObject] = useState(emptyEmployeeObject);

  return (
    <div>
      <Fieldset id="employeeInformation">
        <Fieldset.Legend>
          <b>Employee Information</b>
        </Fieldset.Legend>
        <InputField
          name="firstName"
          value={employeeObject.firstName}
          onChange={(e) =>
            setEmployeeObject({ ...employeeObject, firstName: e.target.value })
          }
        >
          First name
        </InputField>
        <br />
        <InputField
          name="lastName"
          value={employeeObject.lastName}
          onChange={(e) =>
            setEmployeeObject({ ...employeeObject, lastName: e.target.value })
          }
        >
          Last name
        </InputField>
        <br />

        <InputField
          name="email"
          value={employeeObject.email}
          onChange={(e) =>
            setEmployeeObject({ ...employeeObject, email: e.target.value })
          }
        >
          Email
        </InputField>
        <br />

        <InputField
          name="mobileNumber"
          value={employeeObject.mobileNumber}
          onChange={(e) =>
            setEmployeeObject({
              ...employeeObject,
              mobileNumber: e.target.value,
            })
          }
        >
          Mobile Number
        </InputField>
        <br />

        <InputField
          name="address"
          value={employeeObject.address}
          onChange={(e) =>
            setEmployeeObject({ ...employeeObject, address: e.target.value })
          }
        >
          Address
        </InputField>
        <br />

        <InputField
          name="city"
          value={employeeObject.city}
          onChange={(e) =>
            setEmployeeObject({ ...employeeObject, city: e.target.value })
          }
        >
          City
        </InputField>
        <br />

        <InputField
          name="postcode"
          value={employeeObject.postcode}
          onChange={(e) =>
            setEmployeeObject({ ...employeeObject, postcode: e.target.value })
          }
        >
          Postcode
        </InputField>
        <br />
      </Fieldset>

      <Fieldset id="nextOfKinInfo">
        <Fieldset.Legend>
          <b>Next of Kin Informtion</b>
        </Fieldset.Legend>

        <InputField
          name="nextOfKinName"
          value={employeeObject.nextOfKinName}
          onChange={(e) =>
            setEmployeeObject({
              ...employeeObject,
              nextOfKinName: e.target.value,
            })
          }
        >
          Next of Kin Full Name
        </InputField>
        <br />

        <InputField
          name="nextOfKinContactNumber"
          value={employeeObject.nextOfKinContactNumber}
          onChange={(e) =>
            setEmployeeObject({
              ...employeeObject,
              nextOfKinContactNumber: e.target.value,
            })
          }
        >
          Next of Kin Contact Number
        </InputField>
        <br />
      </Fieldset>

      <Fieldset id="employmentDetails">
        <Fieldset.Legend>
          <b>Employment Details</b>
        </Fieldset.Legend>

        <InputField
          name="salaryBand"
          value={employeeObject.salaryBand}
          onChange={(e) =>
            setEmployeeObject({
              ...employeeObject,
              salaryBand: e.target.value,
            })
          }
        >
          Salary Band
        </InputField>
        <br />

        <InputField
          name="officeLocation"
          value={employeeObject.officeLocation}
          onChange={(e) =>
            setEmployeeObject({
              ...employeeObject,
              officeLocation: e.target.value,
            })
          }
        >
          Office Location
        </InputField>
        <br />

        <InputField
          name="position"
          value={employeeObject.position}
          onChange={(e) =>
            setEmployeeObject({
              ...employeeObject,
              position: e.target.value,
            })
          }
        >
          Position
        </InputField>
        <br />

        <InputField
          name="userType"
          value={employeeObject.userType}
          onChange={(e) =>
            setEmployeeObject({
              ...employeeObject,
              userType: e.target.value,
            })
          }
        >
          User Type
        </InputField>
        <br />

        <InputField
          name="manager"
          value={employeeObject.manager}
          onChange={(e) =>
            setEmployeeObject({
              ...employeeObject,
              manager: e.target.value,
            })
          }
        >
          Manager
        </InputField>
        <br />
      </Fieldset>
      <br />
      <Button onClick={() => sendToBackend(employeeObject)}>
        Create Employee
      </Button>
    </div>
  );
}

export default CreateEmployeeForm;
