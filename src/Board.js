import { Square } from "./Square";
import React from "react";
import { Game } from "./Game";

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: null
        };
    }
    renderSquare(i) {
        // ANY JS CODE BETWEEN BRACKETS POSSIBLE
        { console.log('renderSquare invoked') }
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (squares[i] || Game.calculateWinner(squares)) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });

    }
    render() {
        let winner = Game.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner:   ' + winner;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}