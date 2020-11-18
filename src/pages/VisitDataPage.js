import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import Link from "@govuk-react/link";
import Page from "@govuk-react/page";
import Button from "@govuk-react/button";
import React, { useState, useEffect } from "react";
import axios from "axios";

import LoggedInTopNav from "../components/LoggedInTopNav";
import { useParams } from "react-router-dom";
import VisitorDetails from "../components/VisitDetails";

function VisitDataPage() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { visitId } = useParams();
  console.log(visitId)

  const [visitData, setVisitData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://cors-anywhere.herokuapp.com/https://zingtech-backend.herokuapp.com/api/visitdata/${visitId}`).then((res) => {
      setLoading(false);
      setVisitData(res.data);
    });
  }, []);

  return (
    <div>
      <Page
        header={<LoggedInTopNav highlighted="visitorsTopNav" />}
        beforeChildren={
          <Breadcrumbs>
            <Breadcrumbs.Link id="homePageBreadcrumb" href="/">
              HMRC-HR
            </Breadcrumbs.Link>
            <Breadcrumbs.Link id="visitorsBreadcrumb" href="/visitors">
              My Visitors
            </Breadcrumbs.Link>
            {`${visitData.firstName} ${visitData.email}`}
          </Breadcrumbs>
        }
      >
        <Heading>Visitor Details</Heading>
        <VisitorDetails visitData={visitData} loading={loading} />
      </Page>
    </div>
  );
}

export default VisitDataPage;