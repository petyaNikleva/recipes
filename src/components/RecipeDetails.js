import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from "../context/AuthContext.js"

function RecipeDetails() {
  const { user } = useContext(AuthContext);

  return (
    <div id="about" className="about-main pad-top-100 pad-bottom-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
              <h2 className="block-title"> Пиле в сладко-кисел сос </h2>
              <h3>Тип: Основно</h3>
              <h3>Ниво на трудност: Трудно</h3>

              <p> Първо се приготвя сосът за пилешкото месо.

В дълбок тиган сложете оцета и захарта. Изчакайте малко, докато захарта се разтопи. След това добавете солта и кетчупа. Бъркайте постоянно.

Разтворете нишестето и го прибавете към сместа на котлона.

Когато се сгъсти, го оставете за малко настрана, докато запържите месото.

Нарежете пилешкото филе на по-едри парченца.

Овалвайте всяка от пилешките хапки в брашно, после в яйце. Повтаря се пак овалване в брашно и после яйце. Слагате в тиган да се запържи до златисто.

Към апетитните пилешки късчета добавете соса и разбъркайте.

След 10-15 мин. апетитното пилешко в сладко-кисел сос е готово. </p>

             
              <div className="book-btn">
                {/* {user?._id
                  ? null
                  : <Link to="/register" className="table-btn hvr-underline-from-center">Регистрирай се</Link>
                } */}
                 <Link to="/recipes/:recipeId/edit" className="table-btn hvr-underline-from-center" style={{borderColor: "white"}}>Редактирай</Link>
                 <Link to="recipes/:recipeId/delete" className="table-btn hvr-underline-from-center" style={{borderColor: "white"}}>Изтрий</Link>
                 {/* <Link to="/like" className="table-btn hvr-underline-from-center" style={{borderColor: "white"}}>Харесай</Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
              <div className="about-images">
                <img className="about-main" src="https://m.az-jenata.bg/media/az-jenata/files/articles/448x336/240a896c71cf722e2e71b411bb3f8929.jpg" alt="About Main Image" />
                <img className="about-inset" src="images/cooking1.jpg" alt="About Inset Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RecipeDetails;