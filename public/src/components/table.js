/* eslint-disable react/prop-types */
import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import * as data from "../linkedin_output.json";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./table.css";
const { SearchBar } = Search;

function linkFormatter(cell, row) {
  return (
    <span>
      <a href={cell} target="_blank" rel="noopener noreferrer">
        <span role="img" aria-label="link">
          🔗{" "}
        </span>
        Link
      </a>
    </span>
  );
}
const defaultSorted = [
  {
    dataField: "date",
    order: "desc"
  }
];
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
);
const options = {
  paginationSize: 5,
  pageStartIndex: 1,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: false, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: "First",
  prePageText: "Back",
  nextPageText: "Next",
  lastPageText: "Last",
  nextPageTitle: "First page",
  prePageTitle: "Pre page",
  firstPageTitle: "Next page",
  lastPageTitle: "Last page",
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  sizePerPageList: [
    {
      text: "5",
      value: 5
    },
    {
      text: "10",
      value: 10
    },
    {
      text: "All",
      value: data.data.length
    }
  ] // A numeric array is also available. the purpose of above example is custom the text
};
// eslint-disable-next-line react/display-name
class Table extends React.Component {
  render() {
    // console.log(this.props.source);
    return (
      <div className="bg-white">
        <div className="bg-white"></div>

        <ToolkitProvider
          keyField="tk_id"
          data={data.data}
          columns={columns}
          search
          columnToggle
        >
          {props => (
            <div classes="table">
              <SearchBar
                {...props.searchProps}
                placeholder={"Search for " + data.data.length + " items..."}
              />
              <div />
              <BootstrapTable
                keyField="table_id"
                bootstrap4
                {...props.baseProps}
                pagination={paginationFactory(options)}
                caption={"latest update on: " + data.time}
                defaultSorted={defaultSorted}
              />
            </div>
          )}
        </ToolkitProvider>
      </div>
    );
  }
}

export default Table;
const columns = [
  {
    dataField: "title",
    text: "Title",
    sort: true
  },
  {
    dataField: "company",
    text: "Company",
    sort: true
  },
  {
    dataField: "place",
    text: "Place",
    sort: true
  },
  {
    dataField: "date",
    text: "Date",
    sort: true
  },
  {
    dataField: "senorityLevel",
    text: "Level",
    sort: true
  },
  {
    dataField: "employmentType",
    text: "Type",
    sort: true
  },
  {
    dataField: "link",
    text: "Link",
    sort: false,
    formatter: linkFormatter
  },
  {
    dataField: "industries",
    text: "Industries",
    sort: false
  }
];
