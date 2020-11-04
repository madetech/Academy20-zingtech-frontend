import logo from './logo.svg';
import './App.css';

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Gov.UK React components
import Page from '@govuk-react/page';
import { H1 } from '@govuk-react/heading';
import Footer from '@govuk-react/footer';
import Table from '@govuk-react/table';

// Our components 
import LoginPage from './pages/LoginPage'
import MyProfilePage from './pages/MyProfilePage'
import MyEmployeesPage from './pages/MyEmployeesPage'

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        <Route exact path ="/home">
          <MyProfilePage />
        </Route>
        <Route exact path="/employees">
          <MyEmployeesPage /> 
        </Route>
      
        <Footer meta={
            <Footer.MetaCustom>
              Built by the Bristol ZingTech as a learning experience
            </Footer.MetaCustom>
          }
        />
      </Fragment>
    </Router>
  );
}

export default App;
