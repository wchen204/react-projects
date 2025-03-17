function MealItem({name,price,description,image}) {
    return (
        <div className="meal-item">
            <article>
                <img src={'http://localhost:3000/' + image} alt={name}/>
                <div className="meal-item-description">
                    <h3>{name}</h3>
                    <p className="meal-item-price">{price}</p>
                    <p>{description}</p>
                </div>
                <div className="meal-item-actions">
                    <button className="button">Add to Cart</button>
                </div>
            </article>
        </div>

    );
}

export default MealItem;