
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';

const Login = () => (
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
    <Button>Login</Button>
  </>
);

export default Login;

