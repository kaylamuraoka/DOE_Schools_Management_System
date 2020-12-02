import React, { Component } from "react";
import SchoolDataService from "../services/school.service";
import { Link } from "react-router-dom";

// This component creates a search bar for finding schools by name, a schools array that displays a list on the left, a selected School which is shown on the right
export default class SchoolsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveSchools = this.retrieveSchools.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSchool = this.setActiveSchool.bind(this);
    this.removeAllSchools = this.removeAllSchools.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      schools: [],
      currentSchool: null,
      currentIndex: -1,
      searchName: "",
    };
  }

  componentDidMount() {
    this.retrieveSchools();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
    });
  }

  retrieveSchools() {
    SchoolDataService.getAll()
      .then((response) => {
        this.setState({
          schools: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveSchools();
    this.setState({
      currentSchool: null,
      currentIndex: -1,
    });
  }

  setActiveSchool(school, index) {
    this.setState({
      currentSchool: school,
      currentIndex: index,
    });
  }

  removeAllSchools() {
    SchoolDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchName() {
    SchoolDataService.findByName(this.state.searchName)
      .then((response) => {
        this.setState({
          schools: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchName, schools, currentSchool, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by school name"
              value={searchName}
              onChange={this.onChangeSearchName}
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Schools List</h4>
          <ul className="list-group">
            {schools &&
              schools.map((school, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveSchool(school, index)}
                  key="index"
                >
                  {school.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllSchools}
          >
            Remove All
          </button>
        </div>

        <div className="col-md-6">
          {currentSchool ? (
            <div>
              <h4>School</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentSchool.name}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentSchool.address}
              </div>
              <div>
                <label>
                  <strong>District:</strong>
                </label>{" "}
                {currentSchool.district}
              </div>
              <div>
                <label>
                  <strong>Complex Area:</strong>
                </label>{" "}
                {currentSchool.complex_area}
              </div>
              <div>
                <label>
                  <strong>Complex:</strong>
                </label>{" "}
                {currentSchool.complex}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentSchool.active_project ? "Active" : "Not Active"}
              </div>
              <div>
                <label>
                  <strong>Last Renovated:</strong>
                </label>{" "}
                {currentSchool.last_renovated}
              </div>

              <Link
                to={"/schools/" + currentSchool.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a School...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
