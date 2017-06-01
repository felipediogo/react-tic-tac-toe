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
    const moves = this.props.value.map((step, move) => {

      let desc = move ?
        'Move #' + move :
        'Game start';

      if (move === this.state.itemSelected) {
        desc = <b> + desc + </b>;
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
