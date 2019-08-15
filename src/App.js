import React, { Component } from 'react';
import './App.css';
import SearchButton from './Components/SearchButton';
import axios from 'axios';
// var express = require('express');
// var mysql = require('mysql');
// var app = express();
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Incorrect1@@',
//   database: 'course_monger'
// })



class App extends Component {
  
  state = {
    text: 'Chance',
    showWhen: true,
    info: []
  }

  componentDidMount () {
    axios.get( 'http://localhost:3300/' )
        .then( response => {
            console.log(response)
            })
        .catch( (error) => {
              // handle error
              console.log(error);
            })
        .finally(function () {
              // always executed
            });
            // console.log( response );
        } 

  
  handleClick = () => {
    const boolSet = this.state.showWhen
    this.setState(
      {
        showWhen: !boolSet
      }
      
    );
    axios.get( 'http://localhost:3300/allClasses' )
        .then( response => {
            console.log(response)
            })
        .catch( (error) => {
              // handle error
              console.log(error);
            })
        .finally(function () {
              // always executed
            });
    
  }

  render(){
    let Header = null;

    if(this.state.showWhen){
      Header = (
        <div>
          <h1>
            {this.state.text}
          </h1>
        </div>
      )
    }

    return(
      <div className="App">
        {Header}
        <SearchButton  clicked = {this.handleClick}/>
        
      </div>
    )
  }



};

export default App;




