import React from 'react';

const PersonsInfo = ({personInfo}) => {
    return (
        <div>
            <h1>Here's some information about me ... </h1>
            <h2> My name  is {personInfo.name}</h2>
            <h2> I was born in  {personInfo.birth_year}</h2>
            <h2>My hear  color is {personInfo.hair_color}</h2>
            <h2>My mass is {personInfo.mass}</h2>
            <h2>I have {personInfo.eye_color} eye</h2>

        </div>
    );
};

export default PersonsInfo;