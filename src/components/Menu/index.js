import React from 'react';
import { Link } from 'react-router-dom';
import DEVFLIXLOGO from '../../assets/img/DEVFLIXLOGO.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src = {DEVFLIXLOGO} alt = "DevFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo

            </Button>
        </nav>
    );
}

export default Menu;