import React from "react";
import './homepage.css';
import MenuPage from "../menu";
import { VscDebugBreakpointLog } from 'react-icons/vsc';

export default function HomePage() {
    return (
        <div className="homepage__main-container">
            <MenuPage/>
            <div className="homepage__quote">
                Today's good mood is sponsored by coffee
            </div>
            <div className="homepage__second-container">
               <div className="homepage__info">LOCALLY SOURCED</div> 
               <div className="homepage__info2"><VscDebugBreakpointLog/></div>
               <div className="homepage__info2">ROASTED WITH LOVE</div>
            </div>
        </div>
    );
}