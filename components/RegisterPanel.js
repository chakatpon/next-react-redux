import React from "react";
import { connect } from "react-redux";

import { setLanguage } from "../redux/actions/langActions";

class RegisterPanel extends React.Component {

  componentDidMount() {
    console.log("register panel did mount : ", this.props)
  }

  render() {
    console.log("register panel props : ", this.props)
    return (
      <form>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            ID :
          </label>
            <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputID"
              placeholder="ID Card Number"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputLaser" class="col-sm-2 col-form-label">
            Laser :
          </label>
            <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputLaser"
              placeholder="Laser Number"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputTelephone" class="col-sm-2 col-form-label">
            Telephone :
          </label>
            <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputTelephone"
              placeholder="Telephone"
            />
          </div>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setLanguage })(RegisterPanel);
