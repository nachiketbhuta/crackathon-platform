import React, { Component } from "react";
import "./App.css";
import Card from './components/Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd';
const update = require('immutability-helper');

export default class App extends Component {

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

    correctOrder: [1,2,3,4,5,6],
    isCorrect: false
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
      <DndProvider backend={HTML5Backend}>
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

        {
          this.checkAnswer(this.state.cards) ? <h1>Correct Answer</h1> : <h1>Wrong Answer</h1> 
        }

      </DndProvider>

    );
  }

}