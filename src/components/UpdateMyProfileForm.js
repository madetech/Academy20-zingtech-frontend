import React from 'react';
import axios from "axios";

import Fieldset from '@govuk-react/fieldset';
import DateField from '@govuk-react/date-field';
import Button from '@govuk-react/button';
import Input from '@govuk-react/input';
import Label from '@govuk-react/label';
import LabelText from '@govuk-react/label-text';
import Link from '@govuk-react/link';
import Panel from '@govuk-react/panel';

import ReviewForm from './ReviewForm';

class UpdateMyProfileForm extends React.Component { 
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      // TODO: Update current_user when authentication implemented
      current_user: 10000,
      loaded: false,
      initial: {},
      updated: {},
      editing: true,
      submitted: false
    }
  }

  componentDidMount() {
    axios.get(`https://zingtech-backend.herokuapp.com/api/employeedata/${this.state.current_user}`)
    .then(({ data }) => {
      this.setState({
        loaded: true,
        initial: data,
        updated: data
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

  handleReset() {
    this.setState({
      editing: true,
      updated: this.state.initial
    });
  }

  handleReview() {
    this.setState({
      editing: false,
      updated: {...this.state.initial, ...this.state.updated}
    });
    console.log(this.state);
  }

  handleSubmit() {
    // TODO: POST request to API
    this.setState({
      submitted: true
    })
  }

  render() {
    const { initial, updated } = this.state;

    return <div id="">
            { this.state.loaded && this.state.editing && <>
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
                  // TODO: API needs to return date of birth
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
                <Label>
                  <LabelText>Postcode</LabelText>
                  <Input name="postcode" defaultValue={ initial.postcode } value={ updated.postcode } onChange={ this.handleChange } />
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
              <Link href="/home"><Button>Cancel</Button></Link>
              <Button onClick={ this.handleReset }>Reset</Button>
              <Button onClick={ this.handleReview }>Review and confirm</Button>
              </>
            }
            { !this.state.editing && !this.state.submitted && <>
              <ReviewForm data={ updated } />
              <Link href="/home"><Button>Cancel</Button></Link>
              <Button onClick={ this.handleReset }>Back</Button>
              <Button onClick={ this.handleSubmit }>Confirm</Button>
              </>
            }
            { this.state.submitted && <>
              <Panel title="Your details have been updated">
                Your reference number is<br />
                <strong>74893</strong>
              </Panel>
              </>
            }  
          </div>
  }
}

export default UpdateMyProfileForm;