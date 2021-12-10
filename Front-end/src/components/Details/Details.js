import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipeService from '../../services/recipesService.js'
import { AuthContext } from "../../context/AuthContext.js"

function Details() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    recipeService.getOne(recipeId)
      .then(recipeResult => {
        console.log(recipeResult);
        setRecipe(recipeResult)
      })
  }, [recipeId]);

  const deleteHandler = (e) => {
    e.preventDefault();

    recipeService.deleteRecipe(recipeId, user.token)
      .then(() => {
        navigate('/');
      })
  }

  const likeClickHandler = () => {
    if (recipe.likes.includes(user._id)) {
      //TODO Notification ==-user has already liked this recipe
      return;
    }
    let likes = [...recipe.likes, user._id];
    let likedRecipe = { ...recipe, likes }

    recipeService.like(recipe._id, likedRecipe, user.token)
      .then((resData) => {
        // console.log(resData);
        // console.log(likes)
        setRecipe(resData);
      })

  }

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

              <div className="offer-price">Харесвания: &#128077; {recipe.likes?.length}</div>
              <div className="book-btn">
                {!user?._id
                  ? null
                  : user._id == recipe._ownerId
                    ? <>
                      <Link to="/recipes/:recipeId/edit" className="table-btn hvr-underline-from-center" style={{ borderColor: "white" }}>Редактирай</Link>
                      <a href="#" className="table-btn hvr-underline-from-center" onClick={deleteHandler} style={{ borderColor: "white" }}>Изтрий</a>
                    </>
                    : <button onClick={likeClickHandler} className="table-btn hvr-underline-from-center" style={{ borderColor: "white" }}>Харесай</button>
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