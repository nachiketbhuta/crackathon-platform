import React, { Component } from 'react';

import Card from './Card';
import './../App.css';

const update = require('immutability-helper');

export default class Editor extends Component {

  state = {
    cards: [
      {
        id: 1,
        text: '#include<iostream>',
      },
      {
        id: 2,
        text: 'using namespace std;',
      },
      {
        id: 3,
        text: 'int main() {',
      },
      {
        id: 4,
        text: 'cout << "Hello World" << endl;',
      },
      {
        id: 5,
        text:
          'return 0;',
      },
      {
        id: 6,
        text: '}',
      },
    ],

    correctOrder: [1, 2, 3, 4, 5, 6],
    status: ''
  }

  componentDidMount() {
    this.setState({
      status: ''
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

  render() {    
    return (
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

        <input 
          type="submit"
          onClick={() => 
              this.checkAnswer(this.state.cards) ? 
                this.setState({ status: 'Correct Answer' }) : 
                this.setState({ status: 'Wrong Answer' })
            }
        />

        <p>{this.state.status}</p>

      </div>

      
    )
  }
}
