import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../Routes";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <Sidebar {...props} />
            <div className="layout__content">
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
