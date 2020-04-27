import React,{ Component } from 'react';
import './App.css';
import Learned from './learned';
  
require('dotenv').config()

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      learning: [],
    };
  }

  componentDidMount() {


    fetch('https://api.airtable.com/v0/appjbN2ful2c6dacW/Imported%20table?api_key=keyM53ymgfikEXuqb')
    
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ learning: data.records });
    }).catch(err => {
      // Error :(
    });

  }

  
  
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
            <div className="col">
            <h1>Date</h1>
            </div>
            <div className="col">
            <h1>What I learned</h1>
            </div>
          </div>
          <div>
            {this.state.learning.map(learnings=> <Learned {...learnings.fields}/>)}
            </div>
          </div>
    );
  }
}


export default App;
