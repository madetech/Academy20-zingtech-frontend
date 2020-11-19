import Fieldset from '@govuk-react/fieldset';
import DateField from '@govuk-react/date-field';
import Button from '@govuk-react/button';
import React from 'react';
import Link from '@govuk-react/link';
import Input from '@govuk-react/input';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import axios from "axios";

class UpdateMyProfileForm extends React.Component { 
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      // TODO: Update when authentication implemented
      current_user: 10000,
      loaded: false,
      initial: {},
      updated: {}
    }
  }

  componentDidMount() {
    axios.get(`https://zingtech-backend.herokuapp.com/api/employeedata/${this.state.current_user}`)
    .then(({ data }) => {
      this.setState({
        loaded: true,
        initial: data
      });
    });
  }

  handleChange(e) {
    this.setState({
      updated: {
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    let { initial, updated, loaded } = this.state;

    return !loaded ? <p>Loading...</p> : <div id="">
        <Fieldset>
          <h2>About you</h2>
          <Label >
            <LabelText>First name</LabelText>
            <Input name="firstName" defaultValue={ initial.firstName } value={ updated.firstName } onChange={ this.handleChange }/>
          </Label><br/>
          <Label >
            <LabelText>Last name</LabelText>
            <Input name="lastName" defaultValue={ initial.lastName } value={ updated.lastName } onChange={ this.handleChange } />
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
            <Input name="address" defaultValue={ initial.address } value={ updated.address } onChange={ this.handleChange } />
          </Label><br/>
          <Label>
            <LabelText>Address 2</LabelText>
            <Input value="" />
          </Label><br/>
          <Label>
            <LabelText>City</LabelText>
            <Input name="city" defaultValue={ initial.city } value={ updated.city } onChange={ this.handleChange } />
          </Label><br/>

          <h2>Your next of kin</h2>
          <Label>
            <LabelText>Name</LabelText>
            <Input name="nextOfKin" defaultValue={ initial.nextOfKin } value={ updated.nextOfKin } onChange={ this.handleChange } />
          </Label><br/>
          <Label>
            <LabelText>Contact telephone number</LabelText>
            <Input name="nextOfKinContactNumber" defaultValue={ initial.nextOfKinContactNumber } value={ updated.nextOfKinContactNumber } onChange={ this.handleChange } />
          </Label><br/>
        </Fieldset>
        <br/ >
        <Link href="/visitors"><Button>Review and confirm</Button></Link>
    </div>
  }
}

export default UpdateMyProfileForm;