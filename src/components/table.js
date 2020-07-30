/* eslint-disable react/prop-types */
import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import * as data from "../linkedin_output.json";
import ToolkitProvider, {
  Search,
  ColumnToggle
} from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./table.css";
const { SearchBar } = Search;

function linkFormatter(cell, row) {
  return (
    <span>
      <a href={cell} target="_blank" rel="noopener noreferrer">
        🔗 Link
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

// eslint-disable-next-line react/display-name
class Table extends React.Component {
  constructor(props) {
    super(props);
  }
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
            <div>
              <SearchBar
                {...props.searchProps}
                placeholder={"Search for " + data.data.length + " items..."}
              />
              <div />
              <BootstrapTable
                keyField="table_id"
                bootstrap4
                {...props.baseProps}
                pagination={paginationFactory()}
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

// export default () =>
//   <BootstrapTable keyField='query' data={ data.data } columns={ columns } />
