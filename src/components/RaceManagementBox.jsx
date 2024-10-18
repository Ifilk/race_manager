import React from "react";
import { getAllRaces } from "../api";


// eslint-disable-next-line react/prop-types    
export default function RaceManagementBox(){
    const races = getAllRaces();

    return (
        <div className="list-group mt-3">
            {/* eslint-disable-next-line react/prop-types     */}
            {races.map(race => (
                <div key={race.uid} className="list-group-item">
                <h5>{race.race_name}</h5>
                <p>报名日期: {race.apply_date}</p>
                <p>开始日期: {race.start_date}</p>
                <p>结束日期: {race.end_date}</p>
            </div>
            ))}
        </div>
    );
}