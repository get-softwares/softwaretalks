import React from "react";
import Data from "../Data/SoftwaresData";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import FourHundFour from "../Components/FourHundFour";
import { Helmet } from 'react-helmet'
import Categories from "../Data/CategoryData";

function ncard(val) {
  let SendEmail;
  let hello = ""
  SendEmail = "javas" + hello + "cript:sendemail('" + val.Name + "')"
  return (
    <Route exact path={val.To}>
      <>
        <Helmet>
          <title>{val.Name} - SoftwareMess</title>
          <meta name="description" content={val.desc + "SoftwareMess"} />
        </Helmet>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                id="modal-header"
                style={{ padding: "35px 50px" }}
              >
                <h4 style={{ color: "white" }}>
                  <span className="glyphicon glyphicon-lock "></span>Website
                </h4>
                <button
                  type="button"
                  style={{ outline: "none", fontSize: "30px", color: "#fff" }}
                  className="close"
                  data-dismiss="modal"
                >
                  &times;
                </button>
              </div>
              <div
                className="modal-body"
                id="message_sent"
                style={{ padding: "40px 50px" }}
              >
                <h5 id="message_sent_msg"><p style={{ display: "none" }}>asd</p></h5>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-danger btn-default pull-left"
                  data-dismiss="modal"
                >
                  <span className="glyphicon glyphicon-remove"></span> Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cat">
          <div className="list-group mt-3">
            <button className="btn btn-success d-block p-2">{val.Name}</button>
            <div className="card card-body">
              <div className="overview">
                <h1>{val.Name}</h1>
                <p>{val.desc}</p>
              </div>
              <div className="setup">
                <h2>Setup Details</h2>
                <ul>
                  <li>
                    File name : <i>{val.filename}</i>
                  </li>
                  <li>
                    Setup size : <i>{val.setupsize}</i>
                  </li>
                  <li>
                    License : <i>{val.Free}</i>
                  </li>
                  <li>
                    Developer :{" "}
                    <a
                      href={val.devhref}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i>{val.dev}</i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sysrequi">
                <h2>System Requirment</h2>
                <ul>
                  <li>
                    Operating System :
                    <i> {val.sysos}<br /></i>
                  </li>
                  <li>RAM : {val.sysram}</li>
                  <li>
                    Type : <i>{val.type}</i>
                  </li>
                  <li>Architecture : {val.sysarch}</li>
                </ul>
              </div>
              <div className="download">
                <h2>Download</h2>
                {val.Download}
                <p>
                  <b>
                    Note : If any latest Version is Available please tell us by
                    click on Latest Version Available, we will try to add the
                    latest version to it
                  </b>
                </p>
                <form action={SendEmail} id="form">
                  <button type="submit" className="btn btn-primary mb-2">
                    Latest Version
                  </button>
                </form>
              </div>
              <div className="older">
                <h2>Older Version</h2>
                {val.olderversions}
              </div>
            </div>
          </div>
        </div>
      </>
    </Route>
  );
}

// Categories Data starts
function Softwares() {
  let mylocate = useLocation()
  function nccard(val) {
    if (val.Categories === mylocate.pathname.slice(12)) {
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

  function cate(val) {
    return (
      <Route exact path={val.To}>
        <Helmet>
          <title>{val.Name} - SoftwareMess</title>
        </Helmet>
        <div>
          <div>
            <div className="cat">
              <div className="mb-5">
                <div className="list-group mt-3">
                  <button className="btn btn-success d-block p-2">{val.Name}</button>
                  <div className="card card-body">
                    <div className="list-group folder-group">
                      <div className="row no_ls">
                        {Data.map(nccard)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </Route>
    )
  }
  // Categories Data Ends
  
  // Windows softwares Starts
  function softwaremap(val) {
    if (val.Windows === "Windows") {
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

  function Softwaress() {
    return (
      <>
        <Helmet><title>Windows Softwares - SoftwareMess</title><meta name="description" content="Discover and Download best, FREE Software and Apps - SoftwareMess" /></Helmet>
        <div>
          <div className="cat">
            <div className="mb-5">
              <div className="list-group mt-3">
                <button className="btn btn-success d-block p-2">
                  Windows Softwares
                </button>
                <div className="card card-body">
                  <div className="list-group folder-group">
                    <div className="row no_ls">{Data.map(softwaremap)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // Windows softwares Ends

  // Apps start
  function applicationmap(val) {
    if (val.Apps === "Apps") {
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

  function Application() {
    return (
      <>
        <Helmet><title>Applications - SoftwareMess</title><meta name="description" content="Android apps and games download, download android apps and games for free - SoftwareMess" /></Helmet>
        <div>
          <div className="cat">
            <div className="mb-5">
              <div className="list-group mt-3">
                <button className="btn btn-success d-block p-2">Application</button>
                <div className="card card-body">
                  <div className="list-group folder-group">
                    <div className="row no_ls">{Data.map(applicationmap)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // Apps ends

  // Category starts
  function categoriesdata(val) {
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
  
  function Category() {
    return (
      <>
        <Helmet><title>Categories - SoftwareMess</title><meta name="description" content="Get Many softwares by its categories - SoftwareMess" /></Helmet>
        <div>
          <div className="cat">
            <div className="mb-5">
              <div className="list-group mt-3">
                <button className="btn btn-success d-block p-2">
                  Categories
                </button>
                <div className="card card-body">
                  <div className="list-group folder-group">
                    <div className="row no_ls">{Categories.map(categoriesdata)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // Category ends
  return (
    <>
      <Switch>
        {Data.map(ncard)}
        {Categories.map(cate)}
        <Route path="/windows-softwares" component={Softwaress} />
        <Route path="/apps" component={Application} />
        <Route path="/categories" component={Category} />
        <>
          <Helmet><title>404 Page Not Found</title></Helmet>
          <Route component={FourHundFour}></Route>
          <Route path="/404.html" component={FourHundFour}></Route>
        </>
      </Switch>
    </>
  );
}

export default Softwares;
