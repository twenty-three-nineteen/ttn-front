import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="containersss">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              We are a team of students that are interested in making websites and applications.
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? <div>
                  <div key="AmirH" className="col-md-3 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      <img src={require('../img/team/AmirH.png')} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>AmirH</h4>
                        <p>Backend Developer</p>
                      </div>
                    </div>
                  </div>
                  <div key="Hasti" className="col-md-3 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      <img src={require('../img/team/Hasti.png')} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>Hasti</h4>
                        <p>Frontend Developer</p>
                      </div>
                    </div>
                  </div>
                  <div key="Dimo" className="col-md-3 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      <img src={require('../img/team/Dimo.png')} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>Dimo</h4>
                        <p>Frontend Developer</p>
                      </div>
                    </div>
                  </div>
                  <div key="Yasi" className="col-md-3 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      <img src={require('../img/team/Yasi.png')} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>Yasi</h4>
                        <p>Frontend Developer</p>
                      </div>
                    </div>
                  </div>
                  <div key="Sadra" className="col-md-3 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      <img src={require('../img/team/AmirH.png')} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>Sadra</h4>
                        <p>Backend Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
