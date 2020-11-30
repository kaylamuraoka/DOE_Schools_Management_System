import React, { Component } from "react";
import TutorialDataService from "./../services/school.service";

export default class addSchool extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeComplexArea = this.onChangeComplexArea.bind(this);
    this.onChangeComplex = this.onChangeComplex.bind(this);
    this.onChangeLastRenovated = this.onChangeLastRenovated.bind(this);
    this.saveSchool = this.saveSchool.bind(this);
    this.newSchool = this.newSchool.bind(this);

    this.state = {
      id: null,
      name: "",
      address: "",
      district: "",
      complex_area: "",
      complex: "",
      active_project: "",
      last_renovated: "",
      submitted: false,
    };
  }

  // Functions track the values of the input and set that state for changes.
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onChangeDistrict(e) {
    this.setState({
      district: e.target.value,
    });
  }

  onChangeComplexArea(e) {
    this.setState({
      complex_area: e.target.value,
    });
  }

  onChangeComplex(e) {
    this.setState({
      complex: e.target.value,
    });
  }

  onChangeActiveProject(e) {
    this.setState({
      active_project: e.target.value,
    });
  }

  onChangeLastRenovated(e) {
    this.setState({
      last_renovated: e.target.value,
    });
  }

  // Function to get the value of the form (state) and send the POST request to the Web API
  saveSchool() {
    var data = {
      name: this.state.name,
      address: this.state.address,
      district: this.state.district,
      complex_area: this.state.complex_area,
      complex: this.state.complex,
      last_renovated: this.state.last_renovated,
    };

    // Call the SchoolDataService.create() method
    SchoolDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          address: response.data.address,
          district: response.data.district,
          complex_area: response.data.complex_area,
          complex: response.data.complex,
          active_project: response.data.active_project,
          last_renovated: response.data.last_renovated,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newSchool() {
    this.setState({
      id: null,
      name: "",
      address: "",
      district: "",
      complex_area: "",
      complex: "",
      active_project: "",
      last_renovated: "",

      submitted: false,
    });
  }
  // render method checks the submitted state, and if "submitted: true", show Add button to create a new school again. Otherwise, a Form will display
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newSchool}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                name="address"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="district">District</label>
              <input
                type="text"
                className="form-control"
                id="district"
                required
                value={this.state.district}
                onChange={this.onChangeDistrict}
                name="district"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="complex_area">Complex Area</label>
              <input
                type="text"
                className="form-control"
                id="complex_area"
                required
                value={this.state.complex_area}
                onChange={this.onChangeComplexArea}
                name="complex_area"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="complex">Complex</label>
              <input
                type="text"
                className="form-control"
                id="complex"
                required
                value={this.state.complex}
                onChange={this.onChangeComplex}
                name="complex"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="active_project">Active Project</label>
              <input
                type="text"
                className="form-control"
                id="active_project"
                required
                value={this.state.active_project}
                onChange={this.onChangeActiveProject}
                name="active_project"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="last_renovated">Last Renovated</label>
              <input
                type="date"
                className="form-control"
                id="last_renovated"
                required
                value={this.state.last_renovated}
                onChange={this.onChangeLastRenovated}
                name="last_renovated"
              ></input>
            </div>

            <button onClick={this.saveSchool} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
