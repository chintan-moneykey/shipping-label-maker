import React from "react";
import StepOneSenderDetails from "./StepOneSenderDetails";

const steps = [
  <StepOneSenderDetails
    wizardContext={"from"}
    onAction={"handleNameAndAddress"}
  />
];

export default steps;
