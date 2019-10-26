import React, { Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";
import SearchLeads from "./SearchLeads";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <SearchLeads />
      <Leads />
    </Fragment>
  );
}
