import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './board.css';

class MoveList extends React.Component {
  constructor() {
    super(); 
    this.state = {
      itemSelected: -1,
    };
  }

  render() {
    console.log(this.props.value);
    const moves = this.props.value.history.map((step, move) => {
      const stepNumber = this.props.value.stepNumber;
      let desc = move ?
        'Move #' + move :
        'Game start';

      if (move === stepNumber) {
        desc = <b>{desc}</b>;
      }

      return (
        <li key={move}>
          <a href="#" onClick={() => this.props.onClick(move)}>{desc}</a>
        </li>
      );
    });

    return (
      <div>
        <ol>{moves}</ol>
      </div>
    );
  }
}

export default MoveList;
