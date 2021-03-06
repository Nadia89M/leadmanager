import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import history from './history';

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Home from "./pages/Home"
import Header from "./layout/Header";
import Header2 from "./layout/Header2";
import Sidebar from "./layout/Sidebar";
import Alerts from "./layout/Alerts";
import Dashboard from "./leads/Dashboard";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router history={history}>
            <Fragment>
              <Sidebar />
              <Header2 />
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
