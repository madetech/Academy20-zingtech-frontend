import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';

// Our components 
import Login from '../components/Login'


const NavLink = asNavLinkAnchor(Link);

const LoginPage = (props) => (
  <>
  <Page header={
  <TopNav serviceTitle="HMRC-HR">
    <NavLink to={"/"}>
      sign in
    </NavLink>
  </TopNav> }
  beforeChildren=
    {
      <Breadcrumbs>
        <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
        Login
      </Breadcrumbs>
    }
  >
    <Heading>Login</Heading>
    <Login homepage="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
  </Page>
</>
);

export default LoginPage;