import { useNavigate } from 'react-router-dom';

import * as recipesService from '../services/recipesService.js';

function Create() {


    const onRecipeCreate = (e) => {
        e.preventDefault();
        let formData = new formData(e.currentTarget);

        let name = formData.get('name');
        let img = formData.get('img');
        let difficulty = formData.get('difficulty');
        let type = formData.get('type');
        let description = formData.get('description');

        recipesService.create({
            name,
            img,
            difficulty,
            type,
            description
        })
            .then(recipe => {
                //useNavigate('/recipes')
                console.log(`${recipe} created`)
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

                                <p style={{color: "orangered"}}>СПОДЕЛИ Я С НАС</p>

                                <form onSubmit={onRecipeCreate} id="contact-form" method="post" className="reservations-box" name="contactform">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="text" name="name" id="name" placeholder="ИМЕ..." required="required" data-error="Name is required." />
                                            {/* <input type="text" name="form_name" id="form_name" placeholder="ИМЕ..." required="required" data-error="Firstname is required." /> */}
                                        </div>
                                    </div>
                                

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <input type="text" name="img" id="img" placeholder="СНИМКА..." required="required" data-error="Img is required." />
                                            {/* <input type="email" name="email" id="email" placeholder="СНИМКА..." required="required" data-error="E-mail id is required." /> */}
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <select name="difficulty" id="difficulty" className="" defaultValue="0">
                                                <option value="0">НИВО НА ТРУДНОСТ...</option>
                                                <option value="1">ЛЕСНО</option>
                                                <option value="2">ТРУДНО</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="form-box">
                                            <select type="text" name="type" id="type" className="">
                                                <option value="0">ТИП...</option>
                                                <option value="1">ОСНОВНИ</option>
                                                <option value="2">АЛАМИНУТИ</option>
                                                <option value="3">СУПИ</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-box">
                                            <textarea type="text" name="description" id="description" placeholder="ОПИСАНИЕ..." rows="6" cols="105" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="reserve-book-btn text-center">
                                            <button className="hvr-underline-from-center" value="SEND" id="submit">СЪЗДАЙ </button>
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