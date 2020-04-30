import React, { Component } from "react";
import "./App.css";
import orderBy from "lodash/orderBy";
import Learned from "./learned";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learning: []
    };
  }

  componentDidMount() {
    this.initData();
  }

  initData() {
    fetch(
      "https://api.airtable.com/v0/appk0O7TZ7UxoYsSG/Table%201?api_key=keyM53ymgfikEXuqb"
    )
      .then(resp => resp.json())
      .then(data => {
        const formattedData = data.records.map((o, index) => ({
          ...o.fields,
          index,
          id: o.id,
          key: o.id
        }));

        this.setState({
          learning: orderBy(formattedData, ["date"], ["desc"])
        });
      });
  }

  render() {
    return (
      <div className="header">
        <div className="container mt-5">
          <div className="row text-center">
            <div className="col">
              <img className="logo" src={require("./mathu-learns.svg")} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>learning something new everyday...</h2>
            </div>
          </div>
          <div className="row info">
            <div className="col">
              <p>Not every day needs to be productive or involve shipping code. But every day is about learning something new whether it be about technology, life lessons, and the why - why we do the things we do. Life is short. I want to take everything in while I can, being grateful for the new things I get to experience every day.</p>
            </div>
          </div>
          <div>
            {this.state.learning.map(learnings => (
              <Learned {...learnings} />
            ))}
          </div>
          <div className="row center">
            <div className="col p-4 ">
              <p>Made by <a href="http://www.mathurahravigulan.com">Mathurah</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
