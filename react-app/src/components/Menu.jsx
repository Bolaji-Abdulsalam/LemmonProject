import React from "react";
import recipes from '../recipes';
import foodonion from '../images/foodonion.jpg';

const Menu = () => {
    return(
        <div className="menu-container">
            <div className="menu-header"> 
                <h2>This week specials</h2>
                <button>Order Menu</button>
            </div>

            {/* menu cards */}
            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                       <img src={foodonion} alt="" /> 
                       <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn">Order Now</button>
                        </div>
                    </div> )
                }
            </div>
        </div>
    )
}

export default Menu;