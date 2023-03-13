import background from "../../assets/css/Background.module.css"
import React from 'react';
import './ExercisePlan.css';
import Table from './Table';


export default function ExercisePlan() {

    return (
        <div className={background.default}>
            <div className="Container">
                <div className="Title">
                    <h1>Exercise Plans</h1>
                    <h2>Arms Day</h2>
                </div>
                <div className="Table">
                    <Table />
                </div>
            </div>
        </div>
    )
}
