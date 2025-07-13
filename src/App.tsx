import React from "react";
import MainRouter from "./pages/index";

const App = () => {
  return (
    <div>
      <MainRouter />
    </div>
  );
};

export default React.memo(App);
