import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch, Route } from "react-router-dom";

// import components
import SchoolsList from "./components/schools-list.component";
import AddSchool from "./components/add-school.component";
import School from "./components/school.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Fukunaga & Associates Inc.
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/schools"} className="nav-link">
                Schools
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/schools"]} component={SchoolsList} />
            <Route exact path="/add" component={AddSchool} />
            <Route path="/schools/:id" component={School} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
