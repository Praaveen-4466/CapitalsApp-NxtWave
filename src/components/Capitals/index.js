import "./index.css";

import React, { Component } from "react";

const countryAndCapitalsList = [
  {
    id: "NEW_DELHI",
    capitalDisplayText: "New Delhi",
    country: "India",
  },
  {
    id: "LONDON",
    capitalDisplayText: "London",
    country: "United Kingdom",
  },
  {
    id: "PARIS",
    capitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: "KATHMANDU",
    capitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: "HELSINKI",
    capitalDisplayText: "Helsinki",
    country: "Finland",
  },
];

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  };

  onChangeCapital = (event) => {
    this.setState({ activeCapitalId: event.target.value });
  };

  getCountry = () => {
    const { activeCapitalId } = this.state;

    const getActiveCountry = countryAndCapitalsList.find(
      (eachCountry) => eachCountry.id === activeCapitalId
    );
    return getActiveCountry.country;
  };

  render() {
    const { activeCapitalId } = this.state;
    const getCountry = this.getCountry(activeCapitalId);
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map((eachCapital) => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{getCountry}</p>
        </div>
      </div>
    );
  }
}

export default Capitals;
