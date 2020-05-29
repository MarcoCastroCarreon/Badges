import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.css";

import Badge from "../components/Badge";
import "./styles/BadgeDetail.css";
import Modal from "../components/Modal";

class BadgeDetail extends Component {
  state = {
    show: false,
    error: null,
    redirect: false,
    loading: true,
    loadingDialog: false,
    data: {
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

  getBadgeById = async () => {
    console.log("Badges-Id");
    await fetch(
      `https://badges-server-test.herokuapp.com/badges/${this.props.match.params.badgeId}`
    )
      .then(async (response) => {
        const res = await response.json();
        console.log(res);
        return this.setState({ data: { ...res }, loading: false });
      })
      .catch((err) => {
        console.log(err);
        return this.setState({ error: err, loading: false });
      });
  };

  openDialog = (event) => {
    this.setState({ show: true });
  };

  closeDialog = (event) => this.setState({ show: false });

  onClick = (event) => this.setState({ show: true });

  handleDelete = async () => {
    this.setState({ loadingDialog: true });
    this.deleteBadge();
  };

  deleteBadge = async () =>
    await fetch(
      `https://badges-server-test.herokuapp.com/badges/${this.props.match.params.badgeId}`,
      { method: "delete" }
    )
      .then((response) =>
        this.setState({ loadingDialog: false, redirect: true })
      )
      .catch((err) => this.setState({ error: err }));

  componentDidMount() {
    this.setState({ loading: true, error: null });
    this.getBadgeById();
  }

  render() {
    if (this.state.error) return <h1>Error: {this.state.error.message}</h1>;

    if (this.state.loading) {
      return (
        <div className="container">
          <Loader type="Rings" color="#00BFFF" height={120} width={120} />
        </div>
      );
    }

    if (this.state.redirect) {
      return <Redirect to="/badges/list" />;
    }

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.data.firstName}
                lastName={this.state.data.lastName}
                twitter={this.state.data.twitter}
                email={this.state.data.email}
                company={this.state.data.company}
                avatar={this.state.data.avatar}
                avatarStyle={this.state.data.avatarStyle}
                accesories={this.state.data.accesories}
                top={this.state.data.top}
                hairColor={this.state.data.hairColor}
                clothes={this.state.data.clothes}
                clothesColor={this.state.data.clothesColor}
                eyes={this.state.data.eyes}
                eyebrow={this.state.data.eyebrow}
                mouth={this.state.data.mouth}
                skinColor={this.state.data.skinColor}
                facialHair={this.state.data.facialHair}
              />
            </div>
            <div className="buttons-container">
              <Link
                to={`/badges/${this.props.match.params.badgeId}/edit`}
                className="text-reset text-decoration-none btn btn-primary btn-lg"
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={this.openDialog}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        {this.state.show &&
          (this.state.loadingDialog ? (
            <Loader
              className="modal-main"
              type="Rings"
              color="#00BFFF"
              height={120}
              width={120}
            />
          ) : (
            <Modal
              className="modal-center"
              show={this.state.show}
              handleClose={this.closeDialog}
            >
              <h2 className="modal-title">¿Estás seguro?</h2>
              <button
                className="btn btn-danger btn-lg"
                onClick={this.handleDelete}
              >
                Si
              </button>
              <button
                className="btn btn-secondary btn-lg"
                onClick={this.closeDialog}
              >
                No
              </button>
            </Modal>
          ))}
      </Fragment>
    );
  }
}

export default BadgeDetail;
