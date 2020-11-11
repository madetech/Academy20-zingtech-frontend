import Heading from '@govuk-react/heading';
import Breadcrumbs from '@govuk-react/breadcrumbs';
import TopNav, { asNavLinkAnchor } from '@govuk-react/top-nav';
import { Link } from "react-router-dom";
import Page from '@govuk-react/page';
import React from 'react';

// Our components 
import Profile from '../components/Profile'

const NavLink = asNavLinkAnchor(Link);

const headerLinksInfo = [
    {
        to: "/",
        id: "homeTopNav",
        text: "Home"
    },
    {
        to: "/home",
        id: "myProfileTopNav",
        text: "My profile"
    },
    {
        to: "/employees",
        id: "employeesTopNav",
        text: "My employees"
    },
    {
        to: "#",
        id: "visitorsTopNav",
        text: "My visitors"
    },
    {
        to: "#",
        id: "signOutTopNav",
        text: "Sign out"
    }
]

class LoggedInNav extends React.Component {
    render() {
        return (
            <TopNav id='loggedInTopNav' serviceTitle="HMRC-HR">
                {headerLinksInfo.map(headerLink =>{
                    if (true) {
                        <NavLink to={headerLink.to} id={headerLink.id} style={{color : "#1d70b8"}}>
                            {headerLink.text}
                        </NavLink>
                    } else {
                        <NavLink to={headerLink.to} id={headerLink.id}>
                            {headerLink.text}
                        </NavLink>
                    } 
                })}
            </TopNav>
        )
    }
}

// const LoggedInNav = (props) => render(
//     <TopNav id='loggedInTopNav' serviceTitle="HMRC-HR">
//         {headerLinksInfo.map(headerLink =>{
//             if (headerLink.id == props.highlighted) {
//                 <NavLink to={headerLink.to} id={headerLink.id} style={{color : "#1d70b8"}}>
//                     {headerLink.text}
//                 </NavLink>
//             } else {
//                 <NavLink to={headerLink.to} id={headerLink.id}>
//                     {headerLink.text}
//                 </NavLink>
//             } 
//         })}
//     </TopNav>   
// )

export default LoggedInNav;