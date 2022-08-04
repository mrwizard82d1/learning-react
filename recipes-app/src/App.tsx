import React from 'react';
import data from './data';
import './App.css';

function App() {
    let salmon = data[0];
    let fishTacos = data[1];

    const presentIngredient = (ingredient: {name: string, amount: number, measurement: string}) => {
        let { name, amount, measurement } = ingredient;
        return `${amount} ${measurement} ${name}`
    };

    return (
        <div className="App">
            <div>
                <h1>{salmon.name}</h1>
                <h2>Ingredients</h2>
                    <ul>
                        <li>{presentIngredient(salmon.ingredients[0])}</li>
                        <li>{presentIngredient(salmon.ingredients[1])}</li>
                        <li>{presentIngredient(salmon.ingredients[2])}</li>
                        <li>{presentIngredient(salmon.ingredients[3])}</li>
                        <li>{presentIngredient(salmon.ingredients[4])}</li>
                        <li>{presentIngredient(salmon.ingredients[5])}</li>
                    </ul>
                <h2>Steps</h2>
                    <ul>
                        <li>{salmon.steps[0]}</li>
                        <li>{salmon.steps[1]}</li>
                        <li>{salmon.steps[2]}</li>
                        <li>{salmon.steps[3]}</li>
                        <li>{salmon.steps[4]}</li>
                        <li>{salmon.steps[5]}</li>
                    </ul>
            </div>
            <div>
                <h1>{fishTacos.name}</h1>
                <h2>Ingredients</h2>
                <ul>
                    <li>{presentIngredient(fishTacos.ingredients[0])}</li>
                    <li>{presentIngredient(fishTacos.ingredients[1])}</li>
                    <li>{presentIngredient(fishTacos.ingredients[2])}</li>
                    <li>{presentIngredient(fishTacos.ingredients[3])}</li>
                    <li>{presentIngredient(fishTacos.ingredients[4])}</li>
                </ul>
                <h2>Steps</h2>
                <ul>
                    <li>{fishTacos.steps[0]}</li>
                    <li>{fishTacos.steps[1]}</li>
                    <li>{fishTacos.steps[2]}</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
