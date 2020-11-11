import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';
import React from 'react';

// Our components 
import Profile from '../components/Profile'

const NavLink = asNavLinkAnchor(Link);

class LoggedInNav extends React.Component {


    render = () => {
    return <TopNav id='loggedInTopNav' serviceTitle="HMRC-HR">
        <NavLink to={"/"} id='homeNavLink'>
            Home
        </NavLink>
        <NavLink to={"/home"} id='myProfileTopNav' action="true" style={{color : "#1d70b8"}}>
            My profile
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
    }
};


export default LoggedInNav;