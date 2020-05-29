// 3rd Party Dependencies
import React, { Component, Fragment } from "react";
import Loader from "react-loader-spinner";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

//Components and Css
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import * as constants from "../constants";

export class BadgeNew extends Component {
  state = {
    redirect: false,
    loading: false,
    error: null,
    offset: 0,
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
    console.log("Event-Submit");
    this.setState({ loading: true });
    this.createBadge();
  };

  createBadge = async () => {
    const formData = this.state.form;
    await fetch("https://badges-server-test.herokuapp.com/badges/new", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => this.setState({ loading: false, redirect: true }))
      .catch((err) => {
        console.log("Error: ", err);
        this.setState({ error: err });
      });
  };

  render() {
    if (this.state.error) {
      return (
        <h1>Server Error please try on other moment {this.state.error}</h1>
      );
    }

    if (this.state.redirect) {
      return <Redirect to="/badges/list" />;
    }

    if (this.state.loading) {
      return (
        <div className="container">
          <Loader type="Rings" color="#00BFFF" height={120} width={120} />
        </div>
      );
    }

    return (
      <Fragment>
        <div className="container-fluid-1">
          <div className="row">
            <div className="col-6 pos-1">
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

export default BadgeNew;
