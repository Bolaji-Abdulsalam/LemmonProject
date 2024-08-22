import React from "react";
// import { Link } from 'react-router-dom';
import manfood from '../images/manfood.jpg'

const Header = () => {
    return(
        <header className="header">
            <section>
                {/* banner texts */}
                <div className="banner">
                    <h2>Little Lemmon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family Meditarraneran restaurant, focusedn
                         traditional recipes served swith a modern twist</p>
                    
                    {/* <Link to="/footer"><button aria-label="On Click">Reserve Table</button></Link> */}
                    <button>Reserve Table</button>
                </div>

                <div className="banner-img">
                    <img src={manfood} alt="food" />
                </div>
            </section>
        </header>
    );
};

export default Header;