import React, { Component } from "react";
import db from "../components/db";

class Counter extends Component {
  state = {
    count: 0,
  };

  async componentDidMount() {
    const res = await db.query("SELECT count FROM visitor WHERE countID = 1");
    this.setState({ count: res.rows[0].count });
  }

  handleClick = async () => {
    const newCount = this.state.count + 1;
    await db.query("UPDATE visitors SET count = $1 WHERE countID = 1", [
      newCount,
    ]);
    this.setState({ count: newCount });
  };

  render() {
    return (
      <div className="container">
        <h1>Visitor Counter</h1>
        <p>Number of visitors: {this.state.count}</p>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Increase count
        </button>
      </div>
    );
  }
}

export default Counter;
