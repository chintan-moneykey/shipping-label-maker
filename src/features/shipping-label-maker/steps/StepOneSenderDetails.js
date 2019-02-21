import React, { Component } from "react";

export class StepOneSenderDetails extends Component {
  render() {
    return (
      <div>
        <form class="ui form">
          <div class="field">
            <label>First Name</label>
            <input placeholder="First Name" />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" class="hidden" readonly="" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button type="submit" class="ui button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default StepOneSenderDetails;
