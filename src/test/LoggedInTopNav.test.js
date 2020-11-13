import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Link } from "react-router-dom";

import LoggedInTopNav from '../components/LoggedInTopNav'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("LoggedInTopNav contains HMRC-HR", () => {
  act(() => {
    render(<BrowserRouter><LoggedInTopNav highlighted='myProfileTopNav'/></BrowserRouter>, container) ;
  });
  console.log(document.getElementById('loggedInTopNav'))
  expect(document.getElementById('loggedInTopNav').textContent).toContain("HMRC-HR");
});


it("LoggedInTopNav contains home link", () => {
    act(() => {
      render(<BrowserRouter><LoggedInTopNav highlighted='myProfileTopNav'/></BrowserRouter>, container) ;
    });
    expect(document.getElementById('loggedInTopNav')).toContainElement(document.getElementById("homeTopNav"));
  });

  xit("LoggedInTopNav links redirect to correct location when clicked", () => {
    act(() => {
      render(<BrowserRouter><LoggedInTopNav highlighted='myProfileTopNav'/></BrowserRouter>, container) ;
    });
  });

  it("LoggedInTopNav link to variable page (myProfileTopNav) is highlighted", () => {
    act(() => {
      render(<BrowserRouter><LoggedInTopNav highlighted='myProfileTopNav'/></BrowserRouter>, container) ;
    });
    expect(document.getElementById('myProfileTopNav')).toHaveStyle({color: "#1d70b8"});
    expect(document.getElementById('homeTopNav')).toHaveStyle({color: "rgb(255, 255, 255)"});
  });

  it("LoggedInTopNav link to variable page (homeTopNav) is highlighted", () => {
    act(() => {
      render(<BrowserRouter><LoggedInTopNav highlighted='homeTopNav'/></BrowserRouter>, container) ;
    });
    expect(document.getElementById('myProfileTopNav')).toHaveStyle({color: "rgb(255, 255, 255)"});
    expect(document.getElementById('homeTopNav')).toHaveStyle({color: "#1d70b8"});
  });

  it("LoggedInTopNav contains links to appropriate pages", () => {
    act(() => {
      render(<BrowserRouter><LoggedInTopNav highlighted='homeTopNav'/></BrowserRouter>, container) ;
    });
    expect(document.getElementById('homeTopNav')).toContainHTML('href="/"');
    // expect(document.getElementById('homeTopNav')).toHaveStyle({color: "#1d70b8"});
  }); 