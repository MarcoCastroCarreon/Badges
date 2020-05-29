import React, { Component, Fragment } from "react";
import Avatar from "avataaars";

import "./styles/Badge.css";

class Badge extends Component {
  render() {
    return (
      <Fragment>
        <div className="Badge-container">
          <div className="image-container">
            <Avatar
              avatarStyle={this.props.avatarStyle}
              topType={this.props.top}
              accessoriesType={this.props.accesories}
              hairColor={this.props.hairColor}
              facialHairType={this.props.facialHair}
              clotheType={this.props.clothes}
              clotheColor={this.props.clothesColor}
              eyeType={this.props.eyes}
              eyebrowType={this.props.eyebrow}
              mouthType={this.props.mouth}
              skinColor={this.props.skinColor}
            />
          </div>
          <div className="info-container">
            <h2>
              {this.props.firstName} {this.props.lastName}
            </h2>
            <h5 className="twitter-email-container">
              @{this.props.twitter} - {this.props.email}
            </h5>
            <p className="enterprisename">{this.props.company}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Badge;
