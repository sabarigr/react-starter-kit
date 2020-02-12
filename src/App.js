import React, { Fragment } from "react";
import Menu from "./components/menu";
import { AppRoutes } from "routes";
const App = () => {
  return (
    <Fragment>
      <Menu />
      <AppRoutes />
    </Fragment>
  );
};

export default App;
