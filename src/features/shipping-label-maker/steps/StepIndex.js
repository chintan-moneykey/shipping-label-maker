import React from "react";
import StepOneSenderDetails from "./StepOneSenderDetails";
import StepTwoRecipientDetails from "./StepTwoRecipientDetails";
import StepThreeWeight from "./StepThreeWeight";
import StepFourShipping from "./StepFourShipping";
import StepFiveConfirmation from "./StepFiveConfirmation";

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
  />,
  <StepFiveConfirmation wizardContext={"wizardContext"} onAction={"confirm"} />
];

export default steps;
