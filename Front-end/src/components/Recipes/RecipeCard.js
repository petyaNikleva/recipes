import './RecipeCard.css';

import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
    return (
        <div className='recipe-container'>
            <Link to={`/recipes/details/${recipe._id}`}>
                <div className='recipe-wrapper'>
                    <img src={recipe.img} alt="meal-img" style={{ width: '270px', height: '200px' }} />
                    <div className='recipe-info'>
                        <h4>{recipe.type}</h4>
                        <h3>{recipe.name}</h3>
                        <h6>Трудност: {recipe.difficulty}</h6>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default RecipeCard;