import React, { Component, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./styles/BadgeForm.css";

class BadgeForm extends Component {
  render() {
    return (
      <Fragment>
        <div className="form-container">
          <h2> Badge Form </h2>
          <form onSubmit={this.props.onSubmit}>
            <div className="row">
              <div className="form-group col">
                <label>Firstname</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={this.props.formValues.firstName}
                />
              </div>
              <div className="form-group col">
                <label>Lastname</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={this.props.formValues.lastName}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label>Twitter</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Twitter"
                  name="twitter"
                  value={this.props.formValues.twitter}
                />
              </div>
              <div className="form-group col">
                <label>Email</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={this.props.formValues.email}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label>Company</label>
                <input
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={this.props.formValues.company}
                />
              </div>
              <div className="form-group col">
                <label>Avatar Style</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  placeholder="Avatar Style"
                  name="avatarStyle"
                  value={this.props.formValues.avatarStyle}
                >
                  {this.props.avatarStyleOptions.map((aStyle) => (
                    <option key={aStyle} value={aStyle}>
                      {aStyle}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label>Accesorios</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Avatar"
                  name="accesories"
                  value={this.props.formValues.accesories}
                >
                  {this.props.accesories.map((acc) => (
                    <option key={acc} value={acc}>
                      {acc}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col">
                <label>Top</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Top"
                  name="top"
                  value={this.props.formValues.top}
                >
                  {this.props.avatarTopOptions.map((top) => (
                    <option key={top} value={top}>
                      {top}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label>Color de Cabello</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Hair Color"
                  name="hairColor"
                  value={this.props.formValues.hairColor}
                >
                  {this.props.hairColorOptions.map((hColor) => (
                    <option key={hColor} value={hColor}>
                      {hColor}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col">
                <label>Ropa</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Clothes"
                  name="clothes"
                  value={this.props.formValues.clothes}
                >
                  {this.props.clotheOptions.map((clothe) => (
                    <option key={clothe} value={clothe}>
                      {clothe}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label>Color-Ropa</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Clothes"
                  name="clothesColor"
                  value={this.props.formValues.clothesColor}
                >
                  {this.props.clotheColorOptions.map((cColor) => (
                    <option key={cColor} value={cColor}>
                      {cColor}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col">
                <label>Ojos</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Clothes"
                  name="eyes"
                  value={this.props.formValues.eyes}
                >
                  {this.props.eyesOptions.map((eyes) => (
                    <option key={eyes} value={eyes}>
                      {eyes}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label>Cejas</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Clothes"
                  name="eyebrow"
                  value={this.props.formValues.eyebrow}
                >
                  {this.props.eyebrowOptions.map((eyebrow) => (
                    <option key={eyebrow} value={eyebrow}>
                      {eyebrow}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col">
                <label>Boca</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Clothes"
                  name="mouth"
                  value={this.props.formValues.mouth}
                >
                  {this.props.mouthOptions.map((mouth) => (
                    <option key={mouth} value={mouth}>
                      {mouth}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label>Color-Piel</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Clothes"
                  name="skinColor"
                  value={this.props.formValues.skinColor}
                >
                  {this.props.skinColorOptions.map((sColor) => (
                    <option key={sColor} value={sColor}>
                      {sColor}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col">
                <label>Bello Facial</label>
                <select
                  onChange={this.props.onChange}
                  className="form-control"
                  type="text"
                  placeholder="Clothes"
                  name="facialHair"
                  value={this.props.formValues.facialHair}
                >
                  {this.props.facialHairOptions.map((fHair) => (
                    <option key={fHair} value={fHair}>
                      {fHair}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="btn btn-outline-primary">Submit</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default BadgeForm;
