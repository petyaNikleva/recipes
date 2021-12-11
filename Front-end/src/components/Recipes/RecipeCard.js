import './RecipeCard.css';

import { Link } from 'react-router-dom';

function RecipeCard ({recipe}) {
    return (
        <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <div className="col-md-6 col-sm-6">
          <div className="blog-block">
            <div className="blog-img-box col-lg-6 col-md-6">
              <img src={recipe.img} alt="" style={{width: '270px', height: '200px', transform: "translate(-15px, 0px)"}}/>
              <div className="overlay">
                <Link to={`/recipes/details/${recipe._id}`}><i className="fa fa-link" aria-hidden="true"></i></Link>
              </div>
            </div>
            <div className="blog-info col-lg-6 col-md-6">
              <p><span>{recipe.type}</span></p>
              <h3 className='blog-info-h2'>{recipe.name}</h3>
              <h5>НИВО НА ТРУДНОСТ: {recipe.difficulty}</h5>
            </div>
          </div>
        </div>
      </div>
    )
}

export default RecipeCard;