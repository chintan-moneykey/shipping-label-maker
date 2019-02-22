import React from "react";
import StepOneSenderDetails from "./StepOneSenderDetails";
import StepTwoRecipientDetails from "./StepTwoRecipientDetails";
import StepThreeWeight from "./StepThreeWeight";

const steps = [
  <StepOneSenderDetails
    wizardContext={"from"}
    onAction={"handleNameAndAddress"}
  />,
  <StepTwoRecipientDetails
    wizardContext={"to"}
    onAction={"handleNameAndAddress"}
  />,
  <StepThreeWeight wizardContext={"weight"} onAction={"handleRootState"} />
];

export default steps;
