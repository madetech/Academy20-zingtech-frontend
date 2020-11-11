import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';

// Our components 
import Profile from '../components/Profile'

const NavLink = asNavLinkAnchor(Link);

const LoggedInNav = (props) => (
    <TopNav id='loggedInTopNav' serviceTitle="HMRC-HR">
        <NavLink to={"/"} id='homeNavLink'>
            Home
        </NavLink>
        <NavLink to={"/home"} action="true">
            <b style={{color:"#1d70b8"}}>My profile</b>
        </NavLink>
        <NavLink to={"/employees"}>
            My employees
        </NavLink>
        <NavLink to={"#"}>
            My visitors
        </NavLink>
        <NavLink to={"#"}>
            Sign out
        </NavLink>
    </TopNav>
//   <TopNav serviceTitle="HMRC-HR" id='topNav'>
//     <NavLink to={"/"}>
//       Home
//     </NavLink>
    // <NavLink to={"/home"} action="true">
    //   <b style={{color:"#1d70b8"}}>My profile</b>
    // </NavLink>
    // <NavLink to={"/employees"}>
    //   My employees
    // </NavLink>
    // <NavLink to={"#"}>
    //   My visitors
    // </NavLink>
    // <NavLink to={"#"}>
    //   Sign out
    // </NavLink>
//   </TopNav>
);

export default LoggedInNav;