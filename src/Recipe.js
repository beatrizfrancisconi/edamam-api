import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        
        <div className={style.recipe}>
                    <h1 className={style.title}>{title}</h1>
                    <h3>Ingredients: </h3>
            <ol>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories: {calories}</p>
            <img className={style.image} src={image} alt="" /> 
        </div>
    );
}

export default Recipe;
