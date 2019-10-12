import React, { Component } from 'react';
import * as moment from 'moment';

import Card from './../Card';
import './../../App.css';


export default class Final extends Component {
  
  state = {
    finalScore: 0,
    team: ''
  }
  
  componentWillMount() {
    this.setState({
      finalScore: localStorage.getItem('score') != 0 ? localStorage.getItem('score'): 0,
      // team: localStorage.getItem('team')
    })
  }

  sendFinalScore = async () => {
    let prgm1 = localStorage.getItem('prgm1');
    let prgm2 = localStorage.getItem('prgm2');
    let prgm3 = localStorage.getItem('prgm3');
    let prgm4 = localStorage.getItem('prgm4');

    if (prgm1 && prgm2 && prgm3 && prgm4) {
      const data = {
        team: localStorage.getItem('team'),
        score: this.state.finalScore
      };
  
      const res = await fetch(`https://guarded-chamber-94862.herokuapp.com/checkAnswer`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data)
      });
  
      const resData = await res.json();

      if (resData.success) {
        window.alert("Thank you for participating in Crackathon!");
      }
    } else {
      window.alert("Solving all the problems is mandatory");
    }
  }
  
  render() {
    return (
      <div className="text-center pt-5">
        <p className="h5 text-white">Team Name: { localStorage.getItem('team') }</p>
        <p className="h5 text-white">Final Score: {this.state.finalScore}</p>

        <input
          value="Submit"
          type="submit"
          className="btn btn-success btn-lg mt-5"
          onClick={() => this.sendFinalScore()}
        />
      </div>

    );
  }

}