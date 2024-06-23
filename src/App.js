
import './App.css';
import Navbar from './componentes/Navbar';
import Contentbox from './componentes/Contentbox';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  articleLength=15
  render() {
    return (
      <Router>
      <div>
        <Navbar></Navbar>
       <Routes>
        <Route exact path='/' element={<Contentbox key="general" size={this.articleLength} catagory="general" typeof="General"></Contentbox>}></Route>
        <Route exact path='/business' element={<Contentbox key="business" size={this.articleLength} catagory="business" typeof="Business"></Contentbox>}></Route>
        <Route exact path='/entertainment' element={<Contentbox key="entertainment"  size={this.articleLength} catagory="entertainment" typeof="Entertainment"></Contentbox>}></Route>
        <Route exact path='/health' element={<Contentbox key="health" size={this.articleLength} catagory="health" typeof="Health"></Contentbox>}></Route>
        <Route exact path='/science' element={<Contentbox key="science" size={this.articleLength} catagory="science" typeof="Science"></Contentbox>}></Route>
        <Route exact path='/sports' element={<Contentbox key="sports" size={this.articleLength} catagory="sports" typeof="Sports"></Contentbox>}></Route>
        <Route exact path='/technology' element={<Contentbox key="technology" size={this.articleLength} catagory="technology" typeof="Technology"></Contentbox>}></Route>

       </Routes>

      </div>

      </Router>
    )
  }
}
