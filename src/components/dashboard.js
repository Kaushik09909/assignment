import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './dashboard.css'
import data from '../table-data.json'
import { MenuItem, Select,TextField } from '@material-ui/core'

function Dashboard() {
  const [searchItem, setSearchItem] = useState('All')
  const [search, setSearch] = useState({
    searchData: searchItem,
    date: ''
  })

  const handleChange = (e) => {
    setSearchItem(e.target.value)
  }

  const onSearch = () => {
    setSearch({
      searchData: searchItem,
      date: ''
    })
  }

  const DisplayResults = () => {
    if (search.searchData === "All") {
      return (Object.keys(data).map(item => {
          return (
            <tr key={item}>
              <td style={{ color: '#3B87FF' }}>
                {item}
              </td>
              {Object.keys(data[item]).map(value => {
                return (
                  <td key={value} style={{ color: '#6F757A', fontWeight: 'normal' }}>
                    {data[item][value].toLocaleString()}
                  </td>
                )
              })}
            </tr>
          )
        })
      )
    } else 
        return (Object.keys(data).filter(i => i === search.searchData).map(item => {
          return (
            <tr key={item}>
              <td style={{ color: '#3B87FF' }}>
                {item}
              </td>
              {Object.keys(data[item]).map(value => {
                return (
                  <td key={value} style={{ color: '#6F757A', fontWeight: 'normal' }}>
                    {data[item][value].toLocaleString()}
                  </td>
                )
              })}
            </tr>
          )
        }
      )
    )
  }

  const CalculateTotal = () => {
    let tab1 = [], tab2 = [], tab3 = [], tab4 = []
    if (search.searchData === "All") {
       Object.keys(data).map(item => {
          return (
            tab1.push(Object.keys(data[item]).filter(i => i === "tbl1_item1").map(value => data[item][value])),
            tab2.push(Object.keys(data[item]).filter(i => i === "tbl1_item2").map(value => data[item][value])),
            tab3.push(Object.keys(data[item]).filter(i => i === "tbl2_item1").map(value => data[item][value])),
            tab4.push(Object.keys(data[item]).filter(i => i === "tbl2_item2").map(value => data[item][value]))
          )
        })
      return (
        <>
          <td>{tab1.reduce((a, b) => parseInt(a) + parseInt(b), 0).toLocaleString()}</td>
          <td>{tab2.reduce((a, b) => parseInt(a) + parseInt(b), 0).toLocaleString()}</td>
          <td>{tab3.reduce((a, b) => parseInt(a) + parseInt(b), 0).toLocaleString()}</td>
          <td>{tab4.reduce((a, b) => parseInt(a) + parseInt(b), 0).toLocaleString()}</td>
        </>
      )
    } else
        return (Object.keys(data).filter(i => i === search.searchData).map(item => {
          return (
              Object.keys(data[item]).map(value => {
                return (
                  <td key={value}>
                    {data[item][value].toLocaleString()}
                  </td>
                )
              }
            )
          )
        }
      )
    )
  }

  return (
    <div className="dashboard">
      <div className="reports">
        Reports
      </div>
      <div className="sort-section">
        <div className="item">
          <label className="label-header" htmlFor="search-item">Search Item</label>
          <Select className="select-data" onChange={handleChange}>
            <MenuItem value="All">All</MenuItem>
            {Object.keys(data).map(item => {
              return (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              )
            })}
          </Select>
        </div>
        <div className="item">
          <label className="label-header" htmlFor="search-item">Duration</label>
          <TextField
            id="date"
            type="date"
            defaultValue=""
          />
        </div>
        <button className="search" onClick={onSearch} type="button">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginTop: "1.9px" }}>
              <SearchIcon fontSize="small" />
            </div>
            <div style={{ marginLeft: "5px" }}>SEARCH</div>
          </div>
        </button>
      </div>
      <div className="table-section">
        <div style={{ display: "flex", margin: "0px 0px 20px 20px", paddingTop: "20px" }}>
          <div className="results">
            Showing Results for:
          </div>
          &nbsp;
          <div className="search-items">
            Search Item:
          </div>
          &nbsp;
          <div className="search-result">
            {search.searchData}
          </div>
          &nbsp;
          &nbsp;
          <div className="search-items">
            |&nbsp;&nbsp;&nbsp; Duration:
          </div>
          &nbsp;
          <div className="search-result">
            NA
          </div>
        </div>
        <div>
          <table id="table-data">
            <thead>
              <tr>
                <th rowSpan={2}>Search Item</th>
                <th colSpan={2}>Table 1</th>
                <th colSpan={2}>Table 2</th>
              </tr>
              <tr>
                <th>tbl1_item1</th>
                <th>tbl1_item2</th>
                <th>tbl2_item1</th>
                <th>tbl2_item2</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#F6F7FB", color: "#666666", fontFamily: "sans-serif" }}>
                <td>Total</td>
                {<CalculateTotal />}
              </tr>
              {<DisplayResults />}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
