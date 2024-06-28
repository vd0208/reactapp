import React from 'react';
import moment from 'moment';

const Emp = () => {
  
    const now = moment().format("[Today is] dddd");
    const then=moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
const dim=moment("2024-06", "YYYY-MM").daysInMonth()
const tono=moment([2013, 7, 3]).toNow();
    return (
        <div style={{ padding: '20px',  color:"red" }}>
            <h1>Using Moment.js in React</h1>
            <p>Current Date and Time: {now}</p>
            <p>The exact time is: {then}</p>
            <p>The days in thsi month are:{dim}</p>
            <p>days remaining:{tono} </p>
            
        </div>
    );
};

export default Emp;
