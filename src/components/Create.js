import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as recipesService from '../services/recipesService.js';
import { AuthContext } from '../context/AuthContext.js';


function Create() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onRecipeCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let img = formData.get('img');
        let difficulty = formData.get('difficulty');
        let type = formData.get('type');
        let description = formData.get('description');

        console.log(name)
        console.log(img)
        console.log(difficulty)
        console.log(type)
        console.log(description)
        console.log(user._id)
        console.log(user.token)


        recipesService.create({
            name,
            img,
            difficulty,
            type,
            description,
            _ownerId: user._id,
        }, user.token)
            .then(recipe => {
                navigate('/')
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

                                <p style={{ color: "orangered" }}>СПОДЕЛИ Я С НАС</p>

                                <form onSubmit={onRecipeCreate} id="contact-form" method="POST" className="reservations-box" name="contactform">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="text" name="name" id="name" placeholder="ИМЕ..." required minlength="3" data-error="Name is required." />
                                        </div>
                                    </div>


                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="text" name="img" id="img" placeholder="СНИМКА..." required data-error="Img is required." />
                                            {/* <input type="email" name="email" id="email" placeholder="СНИМКА..." required="required" data-error="E-mail id is required." /> */}
                                        </div>
                                    </div>
                                    {/* // TODO: requered notification here and below */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <select name="difficulty" id="difficulty" className="" required>
                                                <option value="">НИВО НА ТРУДНОСТ...</option>
                                                <option value="Лесно">Лесно</option>
                                                <option value="Трудно">Трудно</option>
                                            </select>
                                            {/* <input type="text" id="t1" name="fruit" list="l1" required  placeholder="НИВО НА ТРУДНОСТ..."
                                                pattern="Лесно|Трудно" />
                                            <datalist id="l1">
                                            <option>Лесно</option>
                                            <option>Трудно</option>
                                            </datalist> */}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <select type="text" name="type" id="type" required>
                                                <option className="unselectable" value="">ТИП...</option>
                                                <option value="Основни">Основни</option>
                                                <option value="Аламинути">Аламинути</option>
                                                <option value="Супа">Супа</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-box">
                                            <textarea type="text" name="description" id="description" placeholder="ОПИСАНИЕ..." required minlength="3"  rows="6" cols="105" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="reserve-book-btn text-center">
                                            <button className="hvr-underline-from-center">СЪЗДАЙ </button>
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
export default Create;