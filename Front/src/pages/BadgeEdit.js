import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import * as constants from "../constants";
import "./styles/BadgeEdit.css";

export class BadgeEdit extends Component {
  state = {
    redirect: false,
    error: null,
    form: {
      firstName: "FIRST_NAME",
      lastName: "LAST_NAME",
      twitter: "twitter",
      email: "email@example.com",
      company: "Company",
      avatarStyle: "Circle",
      accesories: "Blank",
      top: "NoHair",
      hairColor: "Black",
      clothes: "BlazerShirt",
      clothesColor: "Black",
      eyes: "Happy",
      eyebrow: "Default",
      mouth: "Default",
      skinColor: "Pale",
      facialHair: "Blank",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    this.updateBadge();
  };

  updateBadge = async () => {
    const formData = this.state.form;
    await fetch(
      `https://badges-server-test.herokuapp.com/badges/${this.props.match.params.badgeId}`,
      {
        method: "put",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then(() =>
        setTimeout(this.setState({ loading: false, redirect: true }), 3500)
      )
      .catch((err) => {
        console.log("Error: ", err);
        this.setState({ error: err });
      });
  };

  getBadgeById = async () => {
    await fetch(
      `https://badges-server-test.herokuapp.com/badges/${this.props.match.params.badgeId}`
    )
      .then(async (response) => {
        const res = await response.json();
        this.setState({ form: { ...res }, loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err, loading: false });
      });
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.getBadgeById();
  }

  render() {
    if (this.state.error) {
      return (
        <h1>
          Server Error please try on other moment {this.state.error.message}
        </h1>
      );
    }

    if (this.state.loading) {
      return (
        <div className="container">
          <Loader type="Audio" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }

    if (this.state.redirect) {
      return <Redirect to="/badges/edit" />;
    }

    return (
      <Fragment>
        <div className="container-fluid-1">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                company={this.state.form.company}
                avatar={this.state.form.avatar}
                avatarStyle={this.state.form.avatarStyle}
                accesories={this.state.form.accesories}
                top={this.state.form.top}
                hairColor={this.state.form.hairColor}
                clothes={this.state.form.clothes}
                clothesColor={this.state.form.clothesColor}
                eyes={this.state.form.eyes}
                eyebrow={this.state.form.eyebrow}
                mouth={this.state.form.mouth}
                skinColor={this.state.form.skinColor}
                facialHair={this.state.form.facialHair}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                avatarTopOptions={constants.avatarTopOptions}
                avatarStyleOptions={constants.avatarStyleOptions}
                accesories={constants.accesories}
                hairColorOptions={constants.hairColorOptions}
                clotheOptions={constants.clotheOptions}
                clotheColorOptions={constants.clotheColorOptions}
                eyesOptions={constants.eyes}
                eyebrowOptions={constants.eyebrowOptions}
                mouthOptions={constants.mouthOptions}
                skinColorOptions={constants.skinColorOptions}
                facialHairOptions={constants.facialHairOptions}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BadgeEdit;
