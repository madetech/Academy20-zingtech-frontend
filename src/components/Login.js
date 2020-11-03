
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import Link from '@govuk-react/link';

const Login = (props) => (
  <>
    <InputField    
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
      name="Password"
      hint={[
        'Click here to reset your password',
        <br />,
      ]}
      type="password"
    >
      Password
    </InputField>
    <br/>
    <Link href={props.homepage}><Button>Login</Button></Link>
  </>
);

export default Login;

