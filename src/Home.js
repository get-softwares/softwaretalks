import { BrowserRouter as Router, Link } from "react-router-dom";
import {Helmet}from 'react-helmet'

let AlertShows;

function AlertShow() {
  if (AlertShows === "Yes") {
    return (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Website!</strong> You should enter at least 1 character with no <strong>#</strong>, <strong>%</strong> and <strong>/</strong>.
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" style={{ outline: "none", border: "none" }}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    )
  }
}

function Home(props) {
  AlertShows = props.Alert 
  return (
    <>
    <Router></Router>
    <Helmet><title>Get Softwares - Home</title></Helmet>
      {AlertShow()}
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="mx-auto col-lg-6 col-md-6 align-items-center">
            <img
              src="/media/images/software.jpg"
              className="img-fluid"
              alt="..."
            />
          </div>
          <div className="text-center col-lg-6 col-md-6 container-fluid">
            <h1 style={{ fontSize: "26px" }}>Deeptam Research Foundation</h1>
            <p>
              <b>Get Softwares Here by just Clicking on Get Softwares</b>
            </p>
            <Link
              to="/categories"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg btn-danger btn mb-3"
            >
              Get Softwares
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-3">
          <div className="card mx-auto my-2 p-2 align-items-center" style={{width:'18rem'}}>
            <img
              src="/media/images/android.png"
              className="padded card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Android</h5>
              <p className="card-text text-center">
                Want Android Softwares. Click on Get Android
              </p>
              <Link to="/apps/" className="btn btn-primary d-block">
                Get Android Apps
              </Link>
            </div>
          </div>

          <div className="card mx-auto my-2 p-2 align-items-center" style={{width:'18rem'}}>
            <img
              src="/media/images/windows.png"
              className="padded card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Windows</h5>
              <p className="card-text text-center">
                Want windows Softwares. Click on Get Windows Softwares
              </p>
              <Link to="/windows-softwares" className="btn btn-primary d-block">
                Get Windows Softwares
              </Link>
            </div>
          </div>
          <div className="card mx-auto my-2 p-2 align-items-center" style={{width:'18rem'}}>
            <img
              src="/media/images/cat.png"
              className="padded card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Categories</h5>
              <p className="card-text text-center">
                Want Softwares with his Categories. Click on Categories
              </p>
              <Link to="/categories" className="btn btn-primary d-block">
                Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
