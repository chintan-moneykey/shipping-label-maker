import React, { Component } from "react";

export class StepOneSenderDetails extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
      <h1 class="ui header">Enter Sender's Details</h1>
        <form class="ui form">
          <div class="field">
            <label>Name</label>
            <input 
              placeholder="Enter full name" 
              id="name" 
              step="from" 
              type="text" 
              onChange={data} 
              value={this.props.wizardContext.from.name} />
          </div>
          <div class="field">
            <label>Street Address</label>
            <input 
              placeholder="Enter street address"
              id="street"
              step="from"
              type="text"
              onChange={data}
              value={this.props.wizardContext.from.street}
            />
          </div>
          <div class="field">
            <label>City</label>
            <input 
              placeholder="Enter City"
              id="city"
              step="from"
              type="text"
              onChange={data}
              value={this.props.wizardContext.from.city}
            />
          </div>
          <div class="field">
            <label>State</label>
            <input 
              placeholder="Enter state"
              id="state"
              step="from"
              type="text"
              onChange={data}
              value={this.props.wizardContext.from.state}
            />
          </div>
          <div class="field">
            <label>Zip Code</label>
            <input 
              placeholder="Enter zip code"
              id="zip"
              step="from"
              type="text"
              onChange={data}
              value={this.props.wizardContext.from.zip}
            />
          </div>
          <button type="submit" class="ui button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

StepOneSenderDetails.defaultProps = {
  wizardContext: {},
  data: () => {}
}

export default StepOneSenderDetails;
