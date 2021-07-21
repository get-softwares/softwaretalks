import { BrowserRouter as Router, Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <Router></Router>
      <footer
        className="page-footer font-small stylish-color-dark pt-4 bg-dark text-light"
        style={{zIndex: "10"}}
      >
        <div className="container text-center text-md-left" style={{paddingBottom:'20px'}}>
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Footer Content
              </h5>
              <p>
                Here you can find the softwares. Get most of the Windows
                Softwares, Android Apps with Categories
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Useful Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link style={{transition:'0s'}} to="/">Home</Link>
                </li>
                <li>
                  <Link style={{transition:'0s'}} to="/windows-softwares">Softwares</Link>
                </li>
                <li>
                  <Link style={{transition:'0s'}} to="/apps">Apps</Link>
                </li>
                <li>
                  <Link style={{transition:'0s'}} to="/Categories">Categories</Link>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Categories
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link style={{transition:'0s'}} to="/link1">Link 1</Link>
                </li>
                <li>
                  <Link style={{transition:'0s'}} to="/link2">Link 2</Link>
                </li>
                <li>
                  <Link style={{transition:'0s'}} to="/link3">Link 3</Link>
                </li>
                <li>
                  <Link style={{transition:'0s'}} to="/link4">Link 4</Link>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none" />
          </div>
        </div>
        {/* <hr /> */}
        {/* <div className="footer-copyright text-center pb-3">
          &copy; 2021 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
