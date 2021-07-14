import React from "react";

function Download(props) {
  return (
    <>
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
              <h5 id="message_sent_msg"></h5>
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
          <button className="btn btn-success d-block p-2">{props.title}</button>
          <div className="card card-body">
            <div className="overview">
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
            </div>
            <div className="setup">
              <h2>Setup Details</h2>
              <ul>
                <li>
                  File name : <i>{props.filename}</i>
                </li>
                <li>
                  Setup size : <i>{props.setupsize}</i>
                </li>
                <li>
                  License : <i>{props.Free}</i>
                </li>
                <li>
                  Developer :{" "}
                  <a
                    href={props.devhref}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i>{props.dev}</i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sysrequi">
              <h2>System Requirment</h2>
              <ul>
                <li>
                  Operating System :{" "}
                  <i>
                    {props.sysos}
                    <br />
                  </i>
                </li>
                <li>RAM : {props.sysram}</li>
                <li>
                  Type : <i>{props.type}</i>
                </li>
                <li>Architecture : {props.sysarch}</li>
              </ul>
            </div>
            <div className="download">
              <h2>Download</h2>
              {props.download}
              <p>
                <b>
                  Note : If any latest Version is Available please tell us by
                  click on Latest Version Available, we will try to add the
                  latest version to it
                </b>
              </p>
              <form action={props.send} id="form">
                <button type="submit" className="btn btn-primary mb-2">
                  Latest Version
                </button>
              </form>
            </div>
            <div className="older">
              <h2>Older Version</h2>
              {props.olderversions}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download