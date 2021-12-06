import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipeService from '../../services/recipesService.js'
import { AuthContext } from "../../context/AuthContext.js"

function Details() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  console.log(recipeId)

  useEffect(() => {
    recipeService.getOne(recipeId)
      .then(recipeResult => {
        setRecipe(recipeResult)
      })
  }, [recipeId]);

  return (
    <div id="about" className="about-main pad-top-100 pad-bottom-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
              <h2 className="block-title">{recipe.name}</h2>
              <h3>Тип: {recipe.type}</h3>
              <h3>Ниво на трудност: {recipe.difficulty}</h3>

              <p> {recipe.description}. </p>


              <div className="book-btn">
                {!user?._id
                  ? null
                  : user._id == recipe._ownerId
                    ? <>
                      <Link to="/recipes/:recipeId/edit" className="table-btn hvr-underline-from-center" style={{ borderColor: "white" }}>Редактирай</Link>
                      <Link to="recipes/:recipeId/delete" className="table-btn hvr-underline-from-center" style={{ borderColor: "white" }}>Изтрий</Link>
                    </>
                    : <Link to="/like" className="table-btn hvr-underline-from-center" style={{ borderColor: "white" }}>Харесай</Link>
                }
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
              <div className="about-images">
                <img className="about-main" src={recipe.img} alt="Recipe Main Image" />
                <img className="about-inset" src="/images/cooking1.jpg" alt="Recipe Inset Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default
  Details;