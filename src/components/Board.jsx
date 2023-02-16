import React, { useState } from 'react'
import Cell from './Cell';
import "./Board.css"

export default function Board() {
    let [cell, setCell] = useState([]);
    let [turn, setTurn] = useState(true);

    const reset = () => {
        setTurn(true);
        setCell([]);
    }

    const check = () => {
        const validation = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ];

        for(let checks of validation) {
            let [x, y, z] = checks;
            if(cell[x] != null && cell[x] === cell[y] && cell[y] === cell[z]) {
                return cell[x];
            }
        }

        for(let i = 0; i < 9; i++) {
            if(cell[i] == null) {
                return null;
            }
        }

        return "Tie!";
    }

    let winner = check();

    const handleMove = (index) => {
        if (cell[index] != null || winner) {
            return;
        }

        let boardStatus = [...cell];
        boardStatus[index] = turn ? "X" : "O";
        setTurn(!turn);
        setCell(boardStatus);
        
    }

    return (
        <div>
            {!winner ? <h2> Current turn : {turn ? "X" : "O"} </h2> : <div> <h2> {winner != "Tie!" ? "Winner is : " + winner : "It's a " + winner} </h2> <button onClick={reset}> Play Again </button> </div> }
            <div id='board'>
                <Cell value={cell[0]} clicked={function () { handleMove(0) }} id={"a"} />
                <Cell value={cell[1]} clicked={function () { handleMove(1) }} id={"b"} />
                <Cell value={cell[2]} clicked={function () { handleMove(2) }} id={"c"} />
                <Cell value={cell[3]} clicked={function () { handleMove(3) }} id={"d"} />
                <Cell value={cell[4]} clicked={function () { handleMove(4) }} id={"e"} />
                <Cell value={cell[5]} clicked={function () { handleMove(5) }} id={"f"} />
                <Cell value={cell[6]} clicked={function () { handleMove(6) }} id={"g"} />
                <Cell value={cell[7]} clicked={function () { handleMove(7) }} id={"h"} />
                <Cell value={cell[8]} clicked={function () { handleMove(8) }} id={"i"} />
            </div>
        </div>
    );
}
