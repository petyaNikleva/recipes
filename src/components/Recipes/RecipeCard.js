import { Link } from 'react-router-dom';

function RecipeCard ({
  recipe
}) {
    return (
        <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
        <div className="col-md-6 col-sm-6">
          <div className="blog-block">
            <div className="blog-img-box">
              <img src={recipe.img} alt="" style={{width: '250px', height: '200px'}}/>
              <div className="overlay">
                <Link to={`/recipes/details/${recipe._id}`}><i className="fa fa-link" aria-hidden="true"></i></Link>
              </div>
            </div>
            <div className="blog-dit">
              <p><span>{recipe.type}</span></p>
              <h2>{recipe.name}</h2>
              <h5>НИВО НА ТРУДНОСТ: {recipe.difficulty}</h5>
            </div>
          </div>
        </div>
      </div>
    )
}

export default RecipeCard;