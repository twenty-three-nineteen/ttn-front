import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menuLand" className="navbar navbar-default navbar-fixed-top">
        <div className="containersss">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              2319 Team
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
