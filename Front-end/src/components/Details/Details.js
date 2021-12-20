import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipesService from '../../services/recipesService.js'
import { useAuthContext } from "../../context/AuthContext.js"
import { useNotificationContext, types } from '../../context/NotificationContext.js';

import Modal from '../../components/Common/Modal/Modal.js'

function Details() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  const [show, setShow] = useState(false);
  const { addNotification } = useNotificationContext();

  useEffect(() => {
    let abortController = new AbortController();
    recipesService.getOne(recipeId)
      .then(recipeResult => {
        setRecipe(recipeResult)
      })
      .catch(err => {
        addNotification('Възникна грешка. Моля, опитайте по-късно!', types.danger);
      })
    return () => {
      abortController.abort();
    };
  }, [recipeId, addNotification]);

  const deleteHandler = (e) => {
    e.preventDefault();

    recipesService.deleteRecipe(recipeId, user.token)
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        addNotification('Възникна грешка. Моля, опитайте по-късно!', types.danger);
      })
      .finally(() => {
        setShow(false);
      })
  }

  const onCloseDeleteHandler = (e) => {
    e.preventDefault();
    setShow(false);
  }

  const deleteClickHandler = (e) => {
    e.preventDefault();
    setShow(true);
  }


  const likeClickHandler = () => {
    if (recipe.likes.includes(user._id)) {
      addNotification('Вече си харесал тази рецепта!', types.danger);
      return;
    }
    let likes = [...recipe.likes, user._id];
    let likedRecipe = { ...recipe, likes }

    recipesService.like(recipe._id, likedRecipe, user.token)
      .then(() => {
        setRecipe(state => ({ ...state, likes }));
      })

  }

  return (
    <>
      <Modal show={show} deleteHandler={deleteHandler} onCloseDeleteHandler={onCloseDeleteHandler} />
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
                        <Link to={`/recipes/edit/${recipe._id}`} className="table-btn hvr-underline-from-center" style={{ borderColor: "white" }}>Редактирай</Link>
                        <Link to='#' className="table-btn hvr-underline-from-center" onClick={deleteClickHandler} style={{ borderColor: "white" }}>Изтрий</Link>
                      </>
                      : <button onClick={likeClickHandler} className="table-btn hvr-underline-from-center" style={{ borderColor: "white" }}>Харесай</button>
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <div className="about-images">
                  <img className="about-main" src={recipe.img} alt="Recipe Main" />
                  <img className="about-inset" src="/images/cooking1.jpg" alt="Recipe Inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Details;