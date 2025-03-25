import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems} from "./utils/constants.js";

function App() {
    const [page, setPage] = useState(navItems[0]);
    const [personInfo, setPersonInfo] = useState({});


    return (
        <div className={'container-fluid'}>
            <Header changePage={setPage}/>
            <Main personInfo={personInfo} setPersonInfo={setPersonInfo} page={page}/>
            <Footer/>
        </div>
    )
}

export default App
