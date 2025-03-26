import React, {useEffect} from 'react';
import {baseURL} from "../utils/constants.js";
import Hero from "./Hero.jsx";
import PersonsInfo from "./PersonsInfo.jsx";

const AboutMe = ({personInfo, setPersonInfo}) => {
    useEffect(() => {
        fetch(`${baseURL}/v1/peoples/1`)
            .then(res => res.json())
            .then(data=>setPersonInfo({...data}));
    },[])
    return (
        <div className= "m-5 p-5">
            <Hero />
         <PersonsInfo  personInfo={personInfo} setPersonInfo={setPersonInfo} />
        </div>
    );
};

export default AboutMe;