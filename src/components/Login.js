
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';
import Link from '@govuk-react/link';

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
    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Button>Login</Button></Link>
  </>
);

export default Login;

