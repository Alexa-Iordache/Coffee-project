import React from "react";
import './homepage.css';
import MenuPage from "../menu";
import { VscDebugBreakpointLog } from 'react-icons/vsc';
// import { Link } from "react-router-dom";

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
            {/* <div className="homepage__third-container">
                Choose what <Link to = '/coffee-page'>coffe</Link> you want 
            </div> */}
        </div>
    );
}