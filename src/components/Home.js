import React, { Component } from "react";
import Select from "react-select";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainAmount: 0,
      sideAmount: 0,
      dessertAmount: 0,
      mainTotal: 0,
      sideTotal: 0,
      dessertTotal: 0,
      grandTotal: 0,
    };
  }

  inputOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container-fluid">
        {/* <button className="btn btn-primary">Calau</button> */}

        <div
          className="row bg-info text-white justify-content-center"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          <h2 className="my-5">Hotel Management System</h2>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="card my-1">
              <h4 className="mx-auto card-title">ORDER</h4>
              <div className="p-2">
                {/* The Main Dish Menu */}
                <div className="row mt-3">
                  <div className="col-6">
                    <p className="lead">Enter Main Dish</p>
                  </div>
                  <div className="col-6">
                    <p>Amount</p>
                  </div>
                  <div className="col-6">
                    <Select></Select>
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      name="mainAmount"
                      onChange={this.inputOnChange}
                    />
                  </div>
                </div>

                {/* The Side Dish Menu */}
                <div className="row mt-5">
                  <div className="col-6">
                    <p className="lead">Enter Side Dish</p>
                  </div>
                  <div className="col-6">
                    <p>Amount</p>
                  </div>
                  <div className="col-6">
                    <Select></Select>
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      name="sideAmount"
                      onChange={this.inputOnChange}
                    />
                  </div>
                </div>

                {/* The Desert Dish Menu */}
                <div className="row my-5">
                  <div className="col-6">
                    <p className="lead">Enter Dessert Dish</p>
                  </div>
                  <div className="col-6">
                    <p>Amount</p>
                  </div>
                  <div className="col-6">
                    <Select></Select>
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      name="dessertAmount"
                      onChange={this.inputOnChange}
                    />
                  </div>
                </div>
                <div>
                  <button className="btn btn-success form-control">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <h4>Main Total: {this.state.mainTotal}</h4>
            </div>
            <div className="row">
              <h4>Side Total: {this.state.sideTotal}</h4>
            </div>
            <div className="row">
              <h4>Main Total: {this.state.mainAmount}</h4>
            </div>
            <div className="row">
              <h4>Grand Total: {this.state.grandTotal}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
