import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import {navItems} from "../utils/constants.js";

const Main = ({page, personInfo,setPersonInfo}) => {

    switch (page) {
        case navItems[1]:
            return <AboutMe personInfo={personInfo} setPersonInfo={setPersonInfo} page={page}/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }

};

export default Main;