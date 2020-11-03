import InputField from '@govuk-react/input-field';

const Login = () => (
<InputField    
  name="emailaddress"
  hint={[
    'Your @gov.uk email address',
    <br />,
  ]}
 >
   Email address
</InputField>
);

export default Login;

