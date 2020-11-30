import React, { Component } from "react";
import SchoolDataService from "./../services/school.service";

// use three SchoolDataService methods: get(), update(), delete()

export default class School extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeComplexArea = this.onChangeComplexArea.bind(this);
    this.onChangeComplex = this.onChangeComplex.bind(this);
    this.onChangeActiveProject = this.onChangeActiveProject.bind(this);
    this.onChangeLastRenovated = this.onChangeLastRenovated.bind(this);
    this.getSchool = this.getSchool.bind(this);
    this.updateSchool = this.updateSchool.bind(this);
    this.deleteSchool = this.deleteSchool.bind(this);

    this.state = {
      currentSchool: {
        id: null,
        name: "",
        address: "",
        district: "",
        complex_area: "",
        complex: "",
        active_project: "",
        last_renovated: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getSchool(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentSchool: {
          ...prevState.currentSchool,
          name: name,
        },
      };
    });
  }

  onChangeAddress(e) {
    const address = e.target.value;

    this.setState((prevState) => ({
      currentSchool: {
        ...prevState.currentSchool,
        address: address,
      },
    }));
  }

  onChangeDistrict(e) {
    const district = e.target.value;

    this.setState((prevState) => ({
      currentSchool: {
        ...prevState.currentSchool,
        district: district,
      },
    }));
  }

  onChangeComplexArea(e) {
    const complex_area = e.target.value;

    this.setState((prevState) => ({
      currentSchool: {
        ...prevState.currentSchool,
        complex_area: complex_area,
      },
    }));
  }

  onChangeComplex(e) {
    const complex = e.target.value;

    this.setState((prevState) => ({
      currentSchool: {
        ...prevState.currentSchool,
        complex: complex,
      },
    }));
  }

  onChangeActiveProject(e) {
    const status = e.target.value;

    this.setState((prevState) => ({
      currentSchool: {
        ...prevState.currentSchool,
        active_project: status,
      },
    }));
  }

  onChangeLastRenovated(e) {
    const last_renovated = e.target.value;

    this.setState((prevState) => ({
      currentSchool: {
        ...prevState.currentSchool,
        last_renovated: last_renovated,
      },
    }));
  }

  getSchool(id) {
    SchoolDataService.getAll(id)
      .then((response) => {
        this.setState({
          currentSchool: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateSchool() {
    SchoolDataService.update(
      this.state.currentSchool.id,
      this.state.currentSchool
    )
      .then((response) => {
        console.log(response.date);
        this.setState({
          message: "The school was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteSchool() {
    SchoolDataService.delete(this.state.currentSchool.id)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/schools");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentSchool } = this.state;

    return (
      <div>
        {currentSchool ? (
          <div className="edit-form">
            <h4>School</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentSchool.name}
                  onChange={this.onChangeName}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentSchool.address}
                  onChange={this.onChangeAddress}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  className="form-control"
                  id="district"
                  value={currentSchool.district}
                  onChange={this.onChangeDistrict}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="complex_area">Complex Area</label>
                <input
                  type="text"
                  className="form-control"
                  id="complex_area"
                  value={currentSchool.complex_area}
                  onChange={this.onChangeComplexArea}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="complex">Complex</label>
                <input
                  type="text"
                  className="form-control"
                  id="complex"
                  value={currentSchool.complex}
                  onChange={this.onChangeComplex}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="active_project">Active Project</label>
                <input
                  type="text"
                  className="form-control"
                  id="active_project"
                  value={currentSchool.active_project}
                  onChange={this.onChangeActiveProject}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="last_renovated">Last Renovated</label>
                <input
                  type="date"
                  className="form-control"
                  id="last_renovated"
                  value={currentSchool.last_renovated}
                  onChange={this.onChangeLastRenovated}
                ></input>
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteSchool}
            >
              Delete
            </button>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateSchool}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a School...</p>
          </div>
        )}
      </div>
    );
  }
}
