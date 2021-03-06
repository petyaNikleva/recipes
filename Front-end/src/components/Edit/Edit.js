import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as recipesService from '../../services/recipesService.js';
import { useAuthContext } from '../../context/AuthContext.js'

function Edit() {
    const { recipeId } = useParams();
    const { user } = useAuthContext();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipesService.getOne(recipeId)
          .then(recipe => {
            setRecipe(recipe)
          })
      }, [recipeId]);
    
    const navigate = useNavigate();

    const onEditRecipe = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let img = formData.get('img');
        let difficulty = formData.get('difficulty');
        let type = formData.get('type');
        let description = formData.get('description');

        recipesService.update(
            recipeId,
            {
                name,
                img,
                difficulty,
                type,
                description,
                _ownerId: user._id,
            },
            user.token)
            .then(recipe => {
                navigate(`/recipes/details/${recipeId}`)
            })
            .catch (err => {
                console.log(err)
            })

    }


    return (
        <div id="blog" className="blog-main pad-top-100 pad-bottom-100 parallax">
            <div id="reservation" className="reservations-main pad-top-100 pad-bottom-100">
                <div className="container">
                    <div className="row">
                        <div className="form-reservations-box">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                                    <h2 className="block-title text-center">
                                        ТВОЯТА РЕЦЕПТА
                                    </h2>
                                </div>

                                <p style={{ color: "orangered" }}>РЕДАКТИРАЙ Я</p>

                                <form onSubmit={onEditRecipe} id="contact-form" method="POST" className="reservations-box" name="contactform">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="text" name="name" id="name" placeholder="ИМЕ..." required minLength="5" data-error="Name is required." defaultValue={recipe.name}/>
                                        </div>
                                    </div>


                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="text" name="img" id="img" placeholder="СНИМКА..." required data-error="Img is required." defaultValue={recipe.img}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <select name="difficulty" id="difficulty" className="" required value={recipe.difficulty} onChange={(e) => setRecipe(s => ({...s, difficulty: e.target.value}))}>
                                                <option value="">НИВО НА ТРУДНОСТ...</option>
                                                <option value="Лесно">Лесно</option>
                                                <option value="Трудно">Трудно</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <select type="text" name="type" id="type" required value={recipe.type} onChange={(e) => setRecipe(s => ({...s, type: e.target.value}))}>
                                                <option value="">ТИП...</option>
                                                <option value="Основни">Основни</option>
                                                <option value="Аламинути">Аламинути</option>
                                                <option value="Супи">Супи</option>
                                                <option value="Десерти">Десерти</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-box">
                                            <textarea type="text" name="description" id="description" placeholder="ОПИСАНИЕ..." required minLength="10" rows="6" cols="105" defaultValue={recipe.description}/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="reserve-book-btn text-center">
                                            <button className="hvr-underline-from-center">РЕДАКТИРАЙ</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Edit;