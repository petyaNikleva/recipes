import { useEffect, useState } from "react";

import { useAuthContext } from "../../context/AuthContext.js";
import { useNotificationContext, types } from "../../context/NotificationContext.js";

import MyRecipeCard from "./MyRecipeCard.js";
import * as recipesService from '../../services/recipesService.js'



function MyRecipes() {
  //TODO: Loader

  const [myRecipes, setRecipes] = useState([]);

  const { user } = useAuthContext();
  const {addNotification} = useNotificationContext();
  
  useEffect(() => {
    recipesService.getOwn(user._id)
      .then(result => {
        setRecipes(result);
      })
      .catch(err => {
        addNotification('Възникна грешка. Моля, опитайте по-късно!', types.danger);
      })
  }, [])

  return (
    <div id="menu" className="menu-main pad-top-100 pad-bottom-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
              <h2 className="block-title text-center">
                МОИТЕ РЕЦЕПТИ
              </h2>
              <div>
                {myRecipes.length > 0
                  ?  <p className="title-caption text-center">Благодарим ти, че споделяш своите рецепти с нас! </p>
                  :   null
                }
              </div>
            </div>
            <div className="tab-menu">
              <div className="slider slider-single">
                <div>
                  {myRecipes.length > 0
                    ? <>
                      {myRecipes.map(x => <MyRecipeCard key={x._id} myRecipe={x} />)}
                    </>
                    : <div className="blog-box clearfix banner-text">
                      <h2>Нямате добавени рецепти.</h2>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyRecipes;