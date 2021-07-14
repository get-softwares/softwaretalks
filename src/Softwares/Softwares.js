import React from "react";
import Data from "../SoftwaresData";
import { Route, Switch } from "react-router-dom";
import FourHundFour from "../FourHundFour";
import { Helmet } from 'react-helmet'

function ncard(val) {
  let SendEmail;
  let hello = ""
  SendEmail = "javas"+hello+"cript:sendemail('" + val.Name + "')"
  return (
    <Route exact path={val.To}>
      <>
        <Helmet>
          <title>{val.Name} - Get Softwares</title>
          <meta name="description" content={val.desc} />
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
                <h5 id="message_sent_msg"><p style={{display:"none"}}>asd</p></h5>  
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

function Softwares() {
  return (
    <>
      <Switch>
        {Data.map(ncard)}
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
