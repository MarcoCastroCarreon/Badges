import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesListComponent.css";
import Avatar from "avataaars";

class BadgesListComponent extends Component {
  render() {
    return (
      <Fragment>
        <div className="list-container">
          {this.props.badges.map((badge) => {
            return (
              <Link
                key={badge.id}
                to={`/badges/${badge.id}/detail`}
                className="text-reset text-decoration-none"
              >
                <div className="container-fluid">
                  <div className="img-container">
                    <Avatar
                      style={{ width: "170px", height: "160px" }}
                      avatarStyle={badge.avatarStyle}
                      topType={badge.top}
                      accessoriesType={badge.accesories}
                      hairColor={badge.hairColor}
                      facialHairType={badge.facialHair}
                      clotheType={badge.clothes}
                      clotheColor={badge.clothesColor}
                      eyeType={badge.eyes}
                      eyebrowType={badge.eyebrow}
                      mouthType={badge.mouth}
                      skinColor={badge.skinColor}
                    />
                  </div>
                  <div className="info-container">
                    <h2>
                      {badge.firstName} {badge.lastName}
                    </h2>
                    <div className="twitter-email-container">
                      <h3>twitter: @{badge.twitter}</h3>
                      <h3>email: {badge.email}</h3>
                    </div>
                    <div className="company-container">
                      <h3>company: {badge.company}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default BadgesListComponent;
