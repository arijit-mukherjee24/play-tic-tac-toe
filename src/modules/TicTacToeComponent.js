import React, {useEffect, useState} from 'react';
import SquareBoxComponent from "./SquareBoxComponent";

const resetState = ["", "", "", "", "", "", "", "", "", ""];

function TicTacToeComponent(props) {

    console.log("In TicTacToeComponent: Mode is ",props.mode);

    const [gameState, updateGameState] = useState(resetState)
    const [isXChance, updateIsXChance] = useState(false)

    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = isXChance ? "X" : "0";
        updateIsXChance(!isXChance)
        updateGameState(strings)
    }

    const reset = () => {
        updateGameState(resetState)
    }

    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            reset();
            alert(`Congrats ! ${winner} is the Winner !`)
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    return (
        <div>
            <div className="row jc-center">
                <SquareBoxComponent className="b-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]}/>
                <SquareBoxComponent className="b-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]}/>
                <SquareBoxComponent className="b-bottom" onClick={() => onUserClicked(2)} state={gameState[2]}/>
            </div>
            <div className="row jc-center">
                <SquareBoxComponent className="b-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]}/>
                <SquareBoxComponent className="b-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]}/>
                <SquareBoxComponent className="b-bottom" onClick={() => onUserClicked(5)} state={gameState[5]}/>
            </div>
            <div className="row jc-center">
                <SquareBoxComponent className="b-right" onClick={() => onUserClicked(6)} state={gameState[6]}/>
                <SquareBoxComponent className="b-right" onClick={() => onUserClicked(7)} state={gameState[7]}/>
                <SquareBoxComponent onClick={() => onUserClicked(8)} state={gameState[8]}/>
            </div>
            <button className="reset-button" onClick={reset}>Reset</button>
        </div>
    );
}

export default TicTacToeComponent;