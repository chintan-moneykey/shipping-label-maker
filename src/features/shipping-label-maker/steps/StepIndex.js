import React from "react";
import PropTypes from "prop-types";

import GetSenderAddress from "./GetSenderAddress";
import GetReceiverAddress from "./GetReceiverAddress";
import GetWeight from "./GetWeight";
import GetShippingOption from "./GetShippingOption";
import Confirm from "./Confirm";

const steps = [
  <GetSenderAddress wizardContext={"from"} onAction={"handleNameAndAddress"} />,
  <GetReceiverAddress wizardContext={"to"} onAction={"handleNameAndAddress"} />,
  <GetWeight wizardContext={"weight"} onAction={"handleRootState"} />,
  <GetShippingOption
    wizardContext={"shippingOption"}
    onAction={"handleRootState"}
  />,
  <Confirm wizardContext={"wizardContext"} onAction={"labelSubmit"} />
];

steps.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default steps;
