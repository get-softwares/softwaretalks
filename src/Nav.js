import React, { useState } from "react";
import { NavLink, Link , useHistory} from "react-router-dom";

function Nav() {
  const [search, setSearch] = useState({search:""})
  let name, value
  const handleInputs = (e) => {
    name = e.target.name
    value = e.target.value
    setSearch({ ...search, [name]: value })
  }
  const history = useHistory()
  const Searchinput = (e) => {
    e.preventDefault()
    history.push(`/search/${search.search.replace(/\//g, '').replace(/%/g, '').replace(/#/g, '')}`)
  }
  return (
    <>
      <nav style={{ userSelect: 'none' }} className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <button
          style={{ outline: 'none' }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink exact activeClassName="active nav_active" className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active nav_active" className="nav-link" to="/windows-softwares">
                {/* Softwares */}
                Windows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active nav_active" className="nav-link" to="/apps">
                Apps
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active nav_active" className="nav-link" to="/categories">
                Categories
              </NavLink>
            </li>
          </ul>
          <form
            onSubmit={Searchinput}
            method="dialog"
            className="form-inline my-2 my-lg-0"
          >
            <input
              autoFocus
              name="search"
              type="text"
              id="myInput2"
              className="form-control mr-sm-2"
              spellCheck="false"
              placeholder="Search"
              autoComplete="off"
              value={search.search}
              onChange={handleInputs}
            />

            <button
              type="submit"
              className="btn btn-outline-success"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
