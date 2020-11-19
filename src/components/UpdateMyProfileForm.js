import InputField from '@govuk-react/input-field';
import Fieldset from '@govuk-react/fieldset';
import DateField from '@govuk-react/date-field';
import Button from '@govuk-react/button';
import TextArea from '@govuk-react/text-area';
import React from 'react';
import Link from '@govuk-react/link';

class UpdateMyProfileForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  handleChange = e => {
    this.setState({

    })
  }

  render = () => { 
    return <div id="">
        <Fieldset>
          <h2>About you</h2>
          <InputField name="firstName">First name</InputField><br/>
          <InputField name="lastName">Last name</InputField><br/>
          <DateField>Date of birth</DateField>

          <h2>Your contact details</h2>
          <InputField name="address1">Address 1</InputField><br/>
          <InputField name="address1">Address 2</InputField><br/>
          <InputField name="end_time">City</InputField><br/>

          <h2>Your next of kin</h2>
          <InputField name="nextOfKin">Name</InputField><br />
          <InputField name="nextOfKin">Contact telephone number</InputField>
        </Fieldset>
        <br/ >
        <Link href="/visitors"><Button>Review and confirm</Button></Link>
    </div>
  }
}

export default UpdateMyProfileForm;