import React, { Component } from 'react';
import Axios from 'axios';

class Karyawan extends Component {
  constructor() {
    super();
    this.state = {
      karyawan: []
    }
  }
  loadAPI() {
    Axios
      .get('http://localhost:3001/karyawan')
      .then(({ status, statusText, data }) => {
        this.setState({
          karyawan: data
        })
      })
  }
  hapusKaryawan(id) {
    Axios
      .delete('http://localhost:3001/karyawan/' + id)
      .then(({ status, statusText, data }) => {
        this.loadAPI()
      })
  }
  mapUserList(users) {
    return users.map(user => {
      return <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.nama}</td>
        <td>{user.alamat}</td>
        <td><button onClick={(e) => {this.hapusKaryawan(user.id)}}>x</button></td>
      </tr>
    })
  }
  componentWillMount() {
    this.loadAPI()
  }
  render() {
    return (
      <div>
        <h1>Ini Halaman Users</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.mapUserList(this.state.karyawan)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Karyawan;
