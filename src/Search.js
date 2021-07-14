import React from "react";
import { Link } from "react-router-dom";
import Data from "./SoftwaresData";
import Home from './Home'
import { Helmet } from 'react-helmet'
import Sidebar from './SideBar'
import { useParams } from "react-router";

function Homeshow() {
  const {search} = useParams()
  let getSearch;
  let flags;
  
  if (search) {
    flags = 1;
    getSearch = search
  }
  else {
    flags = 0;
    getSearch = ""
  }
  
  function ncard(val) {
    if (flags === 1) {
      if (
        val.Name.toLowerCase().replace(/ /g, "").indexOf(getSearch.toLowerCase().replace(/ /g, "")) > -1 ||
        val.Name.toLowerCase().replace(/s/g, "").indexOf(getSearch.toLowerCase().replace(/s/g, "")) > -1 ||
        val.Categories.toLowerCase().replace(/s/g, "").indexOf(getSearch.toLowerCase().replace(/s/g, "")) > -1 ||
        val.Categories.toLowerCase().replace(/ /g, "").indexOf(getSearch.toLowerCase().replace(/ /g, "")) > -1
        ) {
          return (
            <li>
            <Link to={val.To} className="list-group-item list-group-item-action">
              <img src={val.img} alt={val.Name} />
              <br />
              {val.Name}
            </Link>
          </li>
        );
      }
    }
  }
  
  function hello23() {
    if (flags === 1) {
      let Flag;
      for (let index = 0; index < Data.length; index++) {
        if (
          Data[index].Name.toLowerCase().replace(/ /g, "").indexOf(search.toLowerCase().replace(/ /g, "")) > -1 ||
          Data[index].Name.toLowerCase().replace(/s/g, "").indexOf(search.toLowerCase().replace(/s/g, "")) > -1 ||
          Data[index].Categories.toLowerCase().replace(/s/g, "").indexOf(search.toLowerCase().replace(/s/g, "")) > -1 ||
          Data[index].Categories.toLowerCase().replace(/ /g, "").indexOf(search.toLowerCase().replace(/ /g, "")) > -1
          ) {
            Flag = 1;
          } else {
          }
        }
      if (Flag === 1) {
      } else {
        return (
          <>
            <div className="noResultFound">
              <img src="/media/images/noResultsFound.jpg" className="noResultFound img-fluid" alt="NoResults" /></div>
            <h2 className="mt-1" style={{ fontSize: '25px', display: 'block', width: '100%', textAlign: "center" }}>Sorry we have 0 search results for '<b>{search}</b>'.<br /> Try again with another specific search term
  </h2>
          </>
        );
      }
    }
  }
  if (getSearch === "") {
    return (<><Sidebar/><Home Alert="Yes" /></>)
  }
  else {
    return <div className="cat">
      <Helmet>
        <title>{'Search Results with '}{search}</title>
      </Helmet>
      <div className="mb-5">
        <div className="list-group mt-3">
          <button className="btn btn-success d-block p-2">
            Search Results
        </button>
          <div className="card card-body" style={{ minHeight: "350px" }}>
            <h3>Search Results with {search}</h3>
            <div className="list-group folder-group">
              <div className="row no_ls">
                {Data.map(ncard)}
                {hello23()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

function Search() {
  return (
    <>
      <div>
        {Homeshow()}
      </div>
    </>
  );
}

export default Search;
