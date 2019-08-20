import React, { Component as Komponen } from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage from './pages/Home.js'
import MoviePage from './pages/Movie.js'
import UsersPage from './pages/Users.js'
import KaryawanPage from './pages/Karyawan.js'

class App extends Komponen {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Halaman Utama</Link></li>
          <li><Link to="/movies">Daftar Film</Link></li>
          <li><Link to="/users">Daftar Pengguna</Link></li>
          <li><Link to="/karyawan">Daftar Karyawan</Link></li>
        </ul>

        <Route exact path="/" component={HomePage}/>
        <Route exact path="/movies" component={MoviePage}/>
        <Route exact path="/users" component={UsersPage}/>
        <Route exact path="/karyawan" component={KaryawanPage}/>
      </div>
    )
  }
}

export default App;
