import Footer from "./components/footers/Footer"
import Header from "./components/headers/Header"
import Section from "./components/sections/Section"
import './App.css';
import logo from "../logo.svg";

const App = () =>{
    const textLogo = "React!!";
    return (
        
        <div>
            
            <Header logo = {logo} textlogo = {textLogo} />
            <Section />
            <Footer />
        </div>
    )
}

export default  App

