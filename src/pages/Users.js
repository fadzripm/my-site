import React, { Component } from 'react';
import Axios from 'axios';

export default class UsersPage extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentWillMount() {
    Axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ status, statusText, data }) => {
        this.setState({
          users: data
        })
      })
  }
  render() {
    function getAddress(address) {
      return `${address.street}, ${address.suite}, ${address.city}`
    }
    function mapUserList(users) {
      return users.map(user => {
        return <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{getAddress(user.address)}</td>
        </tr>
      })
    }
    return (
      <div>
        <h1>Ini Halaman Users</h1>
        <table>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Alamat</th>
          </tr>
          {mapUserList(this.state.users)}
        </table>
      </div>
    )
  }
}
