/* eslint-disable react/prop-types */
import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import linkedin_fulltime_data from "../linkedin_fulltime_output.json";
import linkedin_intern_data from "../linkedin_intern_output.json";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
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

function customeFormatter(column, colIndex, { sortElement, filterElement }) {
  return (
    <div>
      {column.text}
      {sortElement}
      {filterElement}
    </div>
  );
}
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
  disablePageTitle: true
  // A numeric array is also available. the purpose of above example is custom the text
};
// eslint-disable-next-line react/display-name
class Table extends React.Component {
  render() {
    console.log(linkedin_fulltime_data);
    const positions =
      this.props.source === "linkedin_fulltime"
        ? linkedin_fulltime_data
        : linkedin_intern_data;
    console.log(positions);
    return (
      <div className="bg-white">
        <div className="bg-white"></div>

        <ToolkitProvider
          keyField="tk_id"
          data={positions.data}
          columns={columns}
          search
          columnToggle
        >
          {props => (
            <div classes="table">
              <SearchBar
                {...props.searchProps}
                placeholder={
                  "Search for " + positions.data.length + " items..."
                }
              />
              <div />
              <BootstrapTable
                keyField="table_id"
                bootstrap4
                {...props.baseProps}
                pagination={paginationFactory(options)}
                caption={"latest update on: " + positions.time}
                filter={filterFactory()}
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
    text: "Title"
  },
  {
    dataField: "company",
    text: "Company",
    filter: textFilter(),
    headerFormatter: customeFormatter
  },
  {
    dataField: "place",
    text: "Place",
    filter: textFilter(),
    headerFormatter: customeFormatter
  },
  {
    dataField: "date",
    text: "Date",
    sort: true,
    filter: textFilter(),
    headerFormatter: customeFormatter
  },
  {
    dataField: "senorityLevel",
    text: "Level",
    filter: textFilter(),
    headerFormatter: customeFormatter,
    sort: true
  },
  {
    dataField: "employmentType",
    text: "Type",
    filter: textFilter(),
    headerFormatter: customeFormatter,
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

// export default () =>
//   <BootstrapTable keyField='query' data={ data.data } columns={ columns } />
