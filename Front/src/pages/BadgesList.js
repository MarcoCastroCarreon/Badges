import React, { Component, Fragment } from "react";
import Loader from "react-loader-spinner";

import BadgesListComponent from "../components/BadgesListComponent";
import "./styles/BadgesList.css";

class BadgesList extends Component {
  state = {
    loading: true,
    error: null,
    data: [],
  };

  getBadges = async () => {
    await fetch("https://badges-server-test.herokuapp.com/badges")
      .then(async (response) => {
        const resJson = await response.json();
        console.log(resJson);
        return this.setState({ data: [...resJson], loading: false });
      })
      .catch((err) => {
        console.log(err);
        return this.setState({ error: err });
      });
  };

  componentDidMount() {
    this.getBadges();
  }

  render() {
    if (this.state.error) {
      return <h1>Server Error ${this.state.error}</h1>;
    }

    if (!this.state.data.length) {
      return <h1>No Data Found</h1>;
    }

    if (this.state.loading) {
      return (
        <div className="container">
          <Loader type="Puff" color="#00BFFF" height={120} width={120} />
        </div>
      );
    }

    return (
      <Fragment>
        <div className="badges-container">
          <BadgesListComponent badges={this.state.data} />
        </div>
      </Fragment>
    );
  }
}

export default BadgesList;
