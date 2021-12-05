function MyRecipeCard( {myRecipe}) {
    let shortDescription = myRecipe.description.slice(0,120) + '...';

    return (
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <div className="offer-item">
                <img src={myRecipe.img} alt="recipe img" className="img-responsive" />
                <div>
                    <h3>{myRecipe.name}</h3>
                    <p>
                        {shortDescription}
                    </p>
                   
                </div>
                <span className="offer-price">&#128077; 10</span>
            </div>
        </div>
    )
}

export default MyRecipeCard;