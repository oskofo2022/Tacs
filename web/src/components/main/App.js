import React from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import {BrowserRouter as Router} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const pages = ['diccionarios', 'torneos'];
const defaultName = 'invitado';

function App() {

    const [activeTab, setActiveTab] = React.useState(pages[0]);
    const [authenticated, setAuthenticated] = React.useState(false);
    const [name, setName] = React.useState(defaultName);

    const handleTab = (tab) => {
        setActiveTab(tab);
    }

    const signin = (name = null) => {
        setAuthenticated(true);
        setName(name);
        sessionStorage.setItem('userData',
            JSON.stringify({name})
        );
    }

    const signout = () => {
        setAuthenticated(false);
        setName(defaultName);
        sessionStorage.removeItem('userData');
    }

    React.useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('userData'));
        if (storedData && storedData.name)
            signin(storedData.name);

    });

    return (
        <main>
            <Router>
                <AuthContext.Provider
                    value={{authenticated: authenticated, signin: signin, signout: signout, name: name}}>
                    <Header pages={pages} handleTab={handleTab}/>
                    <Home activeTab={activeTab}/>
                    <Footer/>
                </AuthContext.Provider>
            </Router>
        </main>
    );
}

export default App;