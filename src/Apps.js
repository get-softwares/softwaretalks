import { Link } from "react-router-dom";
import Data from "./SoftwaresData";

function ncard(val) {
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
      <div>
        <div className="cat">
          <div className="mb-5">
            <div className="list-group mt-3">
              <button className="btn btn-success d-block p-2">Application</button>
              <div className="card card-body">
                <div className="list-group folder-group">
                  <div className="row no_ls">{Data.map(ncard)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;