import React from "react";
import ReactDOM from "react-dom";
import ShippingLabelMaker from "./ShippingLabelMaker";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ShippingLabelMaker />, document.getElementById("root"));

serviceWorker.unregister();
