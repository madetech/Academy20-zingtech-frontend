import InputField from '@govuk-react/input-field';
import Fieldset from '@govuk-react/fieldset';
import DateField from '@govuk-react/date-field';
import Button from '@govuk-react/button';
import Select from '@govuk-react/select';
import TextArea from '@govuk-react/text-area';
import React from 'react';
import Panel from '@govuk-react/panel';
import Link from '@govuk-react/link';

class VisitorCreateUpdateForm extends React.Component {
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
          <Fieldset.Legend><b>Visit information</b></Fieldset.Legend>
          <InputField name="host">Host ID</InputField><br/>
          <InputField name="office">Visit office location</InputField><br/>
          <InputField name="purpose">Visit purpose</InputField><br/>
          <DateField hintText="For example, 31 03 1980">
          Start date
          </DateField>
          <InputField name="start_time">Start time</InputField><br/>
          <DateField hintText="For example, 31 03 1980">
          End date
          </DateField>
          <InputField name="end_time">End time</InputField><br/>
          <TextArea name="notes">Notes</TextArea><br/>
        </Fieldset>
        <br/ >
        <Fieldset>
          <Fieldset.Legend><b>Visitor</b></Fieldset.Legend>
          <InputField name="first_name">First name</InputField><br/>
          <InputField name="last_name">Last name</InputField><br/>
          <InputField name="email">Email address</InputField><br/>
          <InputField 
          name="contact_number"
          hint="Format like this: 07857 550 853">Mobile phone number
          </InputField><br/>
        </Fieldset>

        <Link href="/visitors"><Button>Submit visit details</Button></Link>

</>
  }
}

export default VisitorCreateUpdateForm;