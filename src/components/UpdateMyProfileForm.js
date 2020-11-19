import InputField from '@govuk-react/input-field';
import Fieldset from '@govuk-react/fieldset';
import DateField from '@govuk-react/date-field';
import Button from '@govuk-react/button';
import TextArea from '@govuk-react/text-area';
import React, {useState, useEffect} from 'react';
import Link from '@govuk-react/link';
import Input from '@govuk-react/input';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import axios from "axios";

const UpdateMyProfileForm = () => {
  // TODO: To be updated when authentication implemented
  const currentUser = 10000;

  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://zingtech-backend.herokuapp.com/api/employeedata/${currentUser}`)
      .then(res => {
        setLoading(false);
        setProfileData(res.data);
      })
  }, [])

  return <div id="">
      <Fieldset>
        <h2>About you</h2>
        <Label >
          <LabelText>First name</LabelText>
          <Input value={profileData.firstName} />
        </Label><br/>
        <Label >
          <LabelText>Last name</LabelText>
          <Input value={profileData.lastName} />
        </Label><br/>

        <DateField defaultValues={{
          // TODO: API needs to return date of births
          day: "31",
          month: "10",
          year: "1982"
        }}>
          Date of birth
        </DateField>

        <h2>Your contact details</h2>
        <Label>
          <LabelText>Address 1</LabelText>
          <Input value={profileData.address} />
        </Label><br/>
        <Label>
          <LabelText>Address 2</LabelText>
          <Input value="" />
        </Label><br/>
        <Label>
          <LabelText>City</LabelText>
          <Input value={profileData.city} />
        </Label><br/>

        <h2>Your next of kin</h2>
        <Label>
          <LabelText>Name</LabelText>
          <Input value={profileData.nextOfKin} />
        </Label><br/>
        <Label>
          <LabelText>Contact telephone number</LabelText>
          <Input value={profileData.nextOfKinContactNumber} />
        </Label><br/>
      </Fieldset>
      <br/ >
      <Link href="/visitors"><Button>Review and confirm</Button></Link>
  </div>
}

export default UpdateMyProfileForm;