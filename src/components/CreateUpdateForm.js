// Import statements
import InputField from '@govuk-react/input-field';
import Fieldset from '@govuk-react/fieldset';
import DateField from '@govuk-react/date-field';
import Button from '@govuk-react/button';
import Select from '@govuk-react/select';
import TextArea from '@govuk-react/text-area';
import React from 'react';
import Panel from '@govuk-react/panel';
import { Link } from "react-router-dom";

class CreateUpdateForm extends React.Component {
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

    const meta = {
      touched: true,
      error: 'Example',
    };
   
    return <>

        <Fieldset>
        <Fieldset.Legend><b>Personal Information</b></Fieldset.Legend>
        <InputField name="first_name">First name</InputField><br/>
        <InputField name="last_name">Last name</InputField><br/>
        <DateField hintText="For example, 31 03 1980">
        Date of birth
        </DateField>
        <InputField 
        name="contact_number"
        hint="format like this: 07857 550 853">Phone number
        </InputField><br/>
        <TextArea name="address">
        Address
        </TextArea><br/>
        </Fieldset>
        <InputField name="email">Email address</InputField><br/><br/>
        <Fieldset>
        <Fieldset.Legend><b>Next of kin</b></Fieldset.Legend>

        
        <InputField name="next_of_kin">Name</InputField><br/>
        <InputField name="next_of_kin_contact_number">Contact number</InputField><br/>
        </Fieldset>

        <br/><br/>

        <Fieldset>
        <Fieldset.Legend><b>Employment details</b></Fieldset.Legend>
        <InputField name="salary">Employee salary</InputField><br/>
        <DateField hintText="For example, 31 03 1999">
        Employee start date
        </DateField>
        <InputField name="office_location">Office location</InputField><br/>
        </Fieldset>

        <Link href="/employees"><Button>Submit employee details</Button></Link>

</>
  }
}

export default CreateUpdateForm;