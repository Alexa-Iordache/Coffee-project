import React from "react";
import './menu.css';
import { Link } from "react-router-dom";

// function for the menu 
export default function MenuPage() {
    return(
        <div className="menupage__main-container">
            <div className="menupage__title">Coffe Emergency</div>
            <ul>
                <li id="menupage__item">
                   <Link to = '/coffee-page'>Coffee</Link>
                </li>
            </ul>
        </div>
    );
}