import React from "react";
import StepOneSenderDetails from "./StepOneSenderDetails";
import StepTwoRecipientDetails from "./StepTwoRecipientDetails";

const steps = [
  <StepOneSenderDetails
    wizardContext={"from"}
    onAction={"handleNameAndAddress"}
  />,
  <StepTwoRecipientDetails
    wizardContext={"to"}
    onAction={"handleNameAndAddress"}
  />
];

export default steps;
