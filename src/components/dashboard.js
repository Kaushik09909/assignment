import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import './dashboard.css'

function Dashboard() {

  const handleChange = () => {

  }

  return (
    <div className="dashboard">
      <div className="reports">
        Reports
      </div>
      <div className="sort-section">
        <div className="item">
          <label className="label-header" htmlFor="search-item">Search Item</label>
          <select onChange={handleChange}>
            <option value="All">All</option>
            <option value="Search Item 1">Search Item 1</option>
            <option value="Search Item 2">Search Item 2</option>
            <option value="Search Item 3">Search Item 3</option>
          </select>
        </div>
        <div className="item">
          <label className="label-header" htmlFor="search-item">Duration</label>
          <input type="date" />
        </div>
        <button className="search" type="button">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginTop: "1.9px" }}>
              <SearchIcon fontSize="small" />
            </div>
            <div style={{ marginLeft: "5px" }}>Search</div>
          </div>
        </button>
      </div>
      <div className="table-section">
        <div style={{ display: "flex" }}>
          <div className="results">
            Showing Results for:
          </div>
          &nbsp;
          <div className="search-items">
            Search Item: |&nbsp;
          </div>
          <div className="search-items">
            Duration:
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
