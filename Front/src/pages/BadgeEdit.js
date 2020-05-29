import React, { Component, Fragment } from "react";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";

import "./styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import avatar from "../images/avataaars.svg";

export class BadgeEdit extends Component {
  state = {
    error: null,
    form: {
      firstName: "",
      lastName: "",
      twitter: "",
      email: "",
      company: "",
      avatar: "",
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
    ).catch((err) => {
      console.log("Error: ", err);
      this.setState({ error: err });
    });
  };

  getBadgeById = async () => {
    console.log("getBadgeId");
    await fetch(
      `https://badges-server-test.herokuapp.com/badges/${this.props.match.params.badgeId}`
    )
      .then(async (response) => {
        const res = await response.json();
        console.log(res);
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
                avatar={this.state.form.avatar || avatar}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
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
