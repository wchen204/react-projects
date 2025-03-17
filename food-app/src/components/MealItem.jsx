function MealItem(props) {
    return (
        <div className="meal-item">
            <article>
                <img src="" alt=""/>
                <div className="meal-item-description">
                    <h3>Meal Name</h3>
                    <p className="meal-item-price">$7.99</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, odit!</p>
                </div>
                <div className="meal-item-actions">
                    <button className="button">Add to Cart</button>
                </div>
            </article>
        </div>

    );
}

export default MealItem;