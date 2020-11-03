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



function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/">
          <LoginPage/>
        </Route>
        <Route exact path ="/employees">
          <Page>
            <H1>HMRC HR - BOOM🤯</H1>
            <Table caption="Employee data">
              <Table.Row>
                <Table.CellHeader>Full Name</Table.CellHeader>
                <Table.CellHeader>Employee ID</Table.CellHeader>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Emma Blott</Table.Cell>
                <Table.Cell>41908374</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>James Francis</Table.Cell>
                <Table.Cell>54245753</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Zack Adlington</Table.Cell>
                <Table.Cell>457245457</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Claire Guest</Table.Cell>
                <Table.Cell>54245753</Table.Cell>
              </Table.Row>
            </Table>
          </Page> 
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
