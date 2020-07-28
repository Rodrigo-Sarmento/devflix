import React from 'react';
import DEVFLIXLOGO from '../../assets/img/DEVFLIXLOGO.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src = {DEVFLIXLOGO} alt = "DevFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo

            </Button>
        </nav>
    );
}

export default Menu;