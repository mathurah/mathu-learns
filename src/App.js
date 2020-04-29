import React, { Component } from 'react'
import './App.css'
import orderBy from 'lodash/orderBy'
import Learned from './learned'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      learning: [],
    }
  }

  componentDidMount() {
    this.initData()
  }

  initData() {
    fetch('https://api.airtable.com/v0/appk0O7TZ7UxoYsSG/Table%201?api_key=keyM53ymgfikEXuqb')
      .then(resp => resp.json())
      .then(data => {
        const formattedData = data.records.map((o, index) => ({
          ...o.fields,
          index,
          id: o.id,
          key: o.id,
        }))

        this.setState({
          learning: orderBy(formattedData, ['date'], ['asc']),
        })
      })
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Date</h1>
          </div>
          <div className="col">
            <h1>Learnings</h1>
          </div>
        </div>
        <div>
          {this.state.learning.map(learnings => (
            <Learned {...learnings} />
          ))}
        </div>
      </div>
    )
  }
}

export default App