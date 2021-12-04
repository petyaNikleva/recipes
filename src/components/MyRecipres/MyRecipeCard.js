//function MyRecipeCard({recipe}) {
function MyRecipeCard() {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <div className="offer-item">
                <img src="images/menu-item-thumbnail-01.jpg" alt="" className="img-responsive" />
                {/* <img src={recipe.img} alt="recipe img" className="img-responsive" /> */}
                <div>
                    {/* <h3>{recipe.name}</h3> */}
                    <h3>Манджа с грозде</h3>
                    <p>
                        Ниво на трудност: Лесно. Йихиувгфугугиуфгф. Хдугвуифгвуифувилквфннф фбвуфуегугкей. йиеиехгиугеуигеухуех. фхфиуг3иуфгугуг
                    </p>
                   
                </div>
                <span className="offer-price">&#128077; 8.5</span>
            </div>
        </div>
    )
}

export default MyRecipeCard;