import React from "react";
function Downloadbtn(
  VersionSo,
  no,
  to,
  color,
  version,
  to2,
  color2,
  version2,
  to3,
  color3,
  version3
) {
  if (no == 1) {
    return (
      <div className="down mb-2">
        <h5>
          <i>{VersionSo}</i>
        </h5>
        <a href={to} download style={{ marginRight: "5px" }}>
          <button className={color}>
            Download
            <br />
            <span className="small">
              <i>{version}</i>
            </span>
          </button>
        </a>
      </div>
    );
  } else if (no == 2) {
    return (
      <div className="down mb-2">
        <h5>
          <i>{VersionSo}</i>
        </h5>
        <a href={to} download style={{ marginRight: "5px" }}>
          <button className={color}>
            Download
            <br />
            <span className="small">
              <i>{version}</i>
            </span>
          </button>
        </a>
        <a href={to2} download>
          <button className={color2}>
            Download
            <br />
            <span className="small">
              <i>{version2}</i>
            </span>
          </button>
        </a>
      </div>
    );
  } else if (no == 3) {
    return (
      <div className="down mb-2">
        <h5>
          <i>{VersionSo}</i>
        </h5>
        <a href={to} download style={{ marginRight: "5px" }}>
          <button className={color}>
            Download
            <br />
            <span className="small">
              <i>{version}</i>
            </span>
          </button>
        </a>
        <a href={to2} download style={{ marginRight: "5px" }}>
          <button className={color2}>
            Download
            <br />
            <span className="small">
              <i>{version2}</i>
            </span>
          </button>
        </a>
        <a href={to3} download style={{ marginRight: "5px" }}>
          <button className={color3}>
            Download
            <br />
            <span className="small">
              <i>{version3}</i>
            </span>
          </button>
        </a>
      </div>
    );
  }
}

export default Downloadbtn