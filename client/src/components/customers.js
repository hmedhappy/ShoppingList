import React, { Component } from 'react';
import './customers.css';
import AddItem from './AddItem';


class Customers extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch('/api/items')
      .then(res => res.json())
      .then(items => this.setState({items}, () => console.log('Customers fetched...', items)));
  }

  render() {
    return (
      <div>
        <AddItem/>
        <h2>Customers</h2>
        <ul>
        {this.state.items.map(item => 
          <li key={item._id}>{item.firstName ||item.name} {item.lastName|| 'from DB' }</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
