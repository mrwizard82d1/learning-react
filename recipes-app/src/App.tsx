import React from 'react';
import data from './data';
import { A } from '@mobily/ts-belt';
import './App.css';

function Ingredient({ name, amount, measurement }: {name: string, amount: number, measurement: string}) {
    return <li>{`${amount} ${measurement} ${name}`}</li>
}

function Instruction(instruction: string) {
    return <li>{instruction}</li>
}

function App() {
    let salmon = data[0];
    let fishTacos = data[1];

    return (
        <div className="App">
            <div>
                <h1>{salmon.name}</h1>
                <h2>Ingredients</h2>
                    <ul> { A.map(salmon.ingredients, Ingredient)} </ul>
                <h2>Steps</h2>
                    <ul> { A.map(salmon.steps, Instruction) } </ul>
            </div>
            <div>
                <h1>{fishTacos.name}</h1>
                <h2>Ingredients</h2>
                <ul> { A.map(fishTacos.ingredients, Ingredient)} </ul>
                <h2>Steps</h2>
                <ul> { A.map(fishTacos.steps, Instruction) } </ul>
            </div>
        </div>
    );
}

export default App;
