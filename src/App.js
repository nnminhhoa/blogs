import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/Routes";
import Layout from "./layouts/Layout";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return (
            <Route key={index} {...rest} element={<Layout>{element}</Layout>} />
          );
        })}
      </Routes>
    );
  }
}
