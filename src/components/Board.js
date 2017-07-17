import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';
import './board.css';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  buildBoard = () => {
    let i = 0;
    const rows = [];
    let squares = [];
    for (var x = 0; x < 3; x++) {
      for (var c = 0; c < 3; c++) {
        squares.push(this.renderSquare(i++));
      }
      rows.push(<div className="board-row">{squares}</div>);
      squares = [];
    }

    return rows;
  };

  render() {
    const squares = [];
    return (
      <div>
        {this.buildBoard()}
      </div>
    );
  }
}

export default Board;
