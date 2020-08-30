import React, { Component } from "react";

class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      type: "",
      price: 0
    };
  }

  inputOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container-fluid">
        <h4 className="text-center">Add Items</h4>
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="card  p-2">
              <div className=" mx-auto">
                <div className="row">
                  <div className="col-6">
                    <p>Item Name</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input className="form-control" name="itemName" onChange={this.inputOnChange}/>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col">
                    <p>Type</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input className="form-control" name="type" onChange={this.inputOnChange}/>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col">
                    <p>Price</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input className="form-control" name="price" type="number" onChange={this.inputOnChange}/>
                  </div>
                </div>

                <button className="btn btn-success mt-3 form-control">
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItems;
