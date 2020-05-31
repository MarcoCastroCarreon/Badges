import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/Home.css";

import logo from "../images/avataaars.svg";

class Home extends Component {
  state = {
    logo:
      "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Blank&hatColor=Red&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=CollarSweater&clotheColor=White&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light",
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 style={{ fontSize: "5vw" }}>
            Welcome to Marco's Badges, to create a new <strong>Badge</strong>{" "}
            click{" "}
            <Link to="/badges/new" className="btn btn-primary">
              here
            </Link>
          </h1>
          <img
            src={logo}
            className="img-fluid"
            style={{ width: "100%/9" }}
            alt="Logo"
          />
        </div>
      </Fragment>
    );
  }
}

export default Home;
