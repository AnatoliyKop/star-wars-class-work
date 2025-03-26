import React, {useEffect, useState} from 'react';
import {baseURL} from "../utils/constants.js";
import "../Contact.css"

const Contact = () => {
    const [planets, setPlanets] = useState(["Loading..."]);
    useEffect(() => {
        fetch(`${baseURL}/v1/planets`)
            .then(res => res.json())
            .then(data => data.map(item => item.name))
            .then(planet => setPlanets(planet))
            .catch(err => err.message);
    }, [])


    return (
        <form className={'containerContact'} onSubmit={e => e.preventDefault()}>
            <label>First Name
                <input type="text" name="firstname" placeholder="Your name.."/>
            </label>

            <label>Last Name
                <input type="text" name="lastname" placeholder="Your last name.."/>
            </label>

            <label>Planet
                <select name="planet">
                    {planets.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </label>

            <label>Subject
                <textarea name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;