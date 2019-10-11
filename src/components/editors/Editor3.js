import React, { Component } from 'react';
import * as moment from 'moment';

import Card from './../Card';
import './../../App.css';

const update = require('immutability-helper');

export default class Editor3 extends Component {

  state = {
    cards: [
      // {
      //   id: 1,
      //   text: '#include<iostream3>',
      // },
      // {
      //   id: 2,
      //   text: 'using namespace std;',
      // },
      // {
      //   id: 3,
      //   text: 'int main() {',
      // },
      // {
      //   id: 4,
      //   text: 'cout << "Hello World" << endl;',
      // },
      // {
      //   id: 5,
      //   text:
      //     'return 0;',
      // },
      // {
      //   id: 6,
      //   text: '}',
      // },
    ],
    languages: ['cpp', 'java', 'python', 'javascript'],
    // languages: ['javascript', 'python'],
    score: 0,
    time: null,
    outputTestcases: ''
  }

  async componentWillMount() {
    // Language
    const randomLang = this.state.languages[2];
    console.log(randomLang);
    const data = {
			language: randomLang
		};

		const res = await fetch(`https://guarded-chamber-94862.herokuapp.com/getquestion`, {
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

    console.log(resData);
    this.setState({
      cards: resData.cards,
      outputTestcases: resData.outputTestcases
    })

    this.setState({
      score: localStorage.getItem('score') != 0 ? localStorage.getItem('score'): 0
    });

    this.setCorrectOrder();
  }

  setCorrectOrder = () => {
    const order = [];
    const ids = [];
    this.state.cards.forEach(card => ids.push(card.id));

    const max = Math.max.apply(null, ids);

    for (let i = 1; i <= max; i++) {
      order.push(i);
    }

    // console.log(order);

    this.setState({
      correctOrder: order
    })
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  getIds = (cards) => {
    const ids = [];
    this.state.cards.forEach(card => ids.push(card.id));
    return ids;
  }

  checkAnswer = (answer) => {
    const ids = this.getIds(answer);
    if (JSON.stringify(ids) == JSON.stringify(this.state.correctOrder)) {
      return true;
    }

    return false;
  }

  renderAlert = (msg) => {
    window.alert(msg);
  }

  renderScore = (isCorrect) => {
    let { score } = this.state;
    score = parseInt(score);

    if (isCorrect) {
      document.getElementById("score").style.color = "#39ff14";
      
      score += 100
      localStorage.setItem('prgm3', true);

    } else {
      
      document.getElementById("score").style.color = "red";
      score -= 10;
      localStorage.setItem('prgm3', false);

    }

    localStorage.setItem('score', score);
    this.setState({
      score
    })
  }

  render() {
    return (
        
        <div className="display-container">
          <div className="all-btns-container">
            <div className="score-container">
              <p className="score text-center" id="score">Score: {this.state.score}</p>
              <div className="example-testcases justify-content-around">
                <div className="output-testcases">
                  <p className="font-weight-bold h5 text-white text-center">Example Output</p>
                  <pre className="text-white text-center">
                    {this.state.outputTestcases}
                </pre>
                </div>
              </div>
            </div>

            <div className="text-center pt-5">
            <input
              value="Submit"
              type="submit"
              className="btn btn-success btn-lg"
              onClick={() => {
                if (this.checkAnswer(this.state.cards)) {
                  this.renderScore(true);
                  // this.setState({
                  //   time: moment().format('MMMM Do YYYY, h:mm:ss a')
                  // })
                } else {
                  this.renderScore(false);
                }
              }
              }
            />

              {/* <p className="mt-4 time text-center text-white">Last Submitted: {this.state.time !== null ? this.state.time : ''}</p> */}
            </div>
          </div>
          <div className="card-container">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />

            ))}
          </div>
        </div>
    )
  }
}
