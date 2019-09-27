import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };
  /*
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
*/
  handleIncrement = (product) => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {

    return (
      <div>
        <span className={this.getBadgedClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
                    return this.handleIncrement(this.state.count);
                }} className="btn btn-secondary btn-sm" >Increment
        </button>
      </div>
    );
  }

  getBadgedClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
