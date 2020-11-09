import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import Link from '@govuk-react/link';

const Login = (props) => (
  <>
    <InputField
      id='emailAddress'
      name="emailaddress"
      hint={[
        'Your @gov.uk email address',
        <br />,
      ]}
    >
      Email address
    </InputField>
    <br/>
    <InputField
    id='password'
      name="Password"
      hint={[
        'Click here to reset your password',
        <br />,
      ]}
      input={{type: "password"}}
    >
      Password
    </InputField>
    <br/>
    <Link href={props.homepage}><Button id='loginButton'>Login</Button></Link>
  </>
);

export default Login;

