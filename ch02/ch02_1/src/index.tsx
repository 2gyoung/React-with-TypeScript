import React from "react";
import ReactDOM from "react-dom/client";

const pVirtualDOM = React.createElement("p", null, "Hello Virtual DOM world!");
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(pVirtualDOM);
