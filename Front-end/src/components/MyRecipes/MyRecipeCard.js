import './MyRecipeCard.css';

import { Link } from 'react-router-dom';

function MyRecipeCard({ myRecipe }) {
    let shortDescription = myRecipe.description.slice(0, 35).trim() + '...';

    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <div className="offer-item">
                <Link className="link" to={`/recipes/details/${myRecipe._id}`}>
                    <img src={myRecipe.img} alt="recipe img" className="img-responsive" />
                </Link>
                <div>
                    <Link className="link" to={`/recipes/details/${myRecipe._id}`}>
                        <h3>{myRecipe.name}</h3>
                    </Link>
                    <p>
                        {shortDescription}
                    </p>
                </div>
                <span className="offer-price">&#128077; {myRecipe.likes?.length}</span>
            </div>
        </div>
    )
}

export default MyRecipeCard;