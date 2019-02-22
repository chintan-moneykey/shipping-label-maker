import React from "react";
import StepOneSenderDetails from "./StepOneSenderDetails";
import StepTwoRecipientDetails from "./StepTwoRecipientDetails";
import StepThreeWeight from "./StepThreeWeight";
import StepFourShipping from "./StepFourShipping";

const steps = [
  <StepOneSenderDetails
    wizardContext={"from"}
    onAction={"handleNameAndAddress"}
  />,
  <StepTwoRecipientDetails
    wizardContext={"to"}
    onAction={"handleNameAndAddress"}
  />,
  <StepThreeWeight wizardContext={"weight"} onAction={"handleRootState"} />,
  <StepFourShipping
    wizardContext={"shippingOption"}
    onAction={"handleRootState"}
  />
];

export default steps;
