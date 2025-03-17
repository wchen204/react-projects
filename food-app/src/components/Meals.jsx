import MealItem from "./MealItem.jsx";
import {useEffect, useState} from "react";


async function getMeals() {
    const response = await fetch('http://localhost:3000/meals',{
        method: "GET"
    });
    const meals = await response.json();

    if (!response.ok) {
        throw new Error('Something went wrong!');
    }

    return meals;
}


function Meals() {

    const [isFetching, setIsFetching] = useState(false)
    const [availableMeals, setAvailableMeals] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchMeals() {
            setIsFetching(true)
            try {
                const meals = await getMeals();
                setAvailableMeals(meals)
                setIsFetching(false);
            } catch (error) {
                setError({
                    message: error.message || 'Could not fetch meals, please try again later.'
                })
                setIsFetching(false);
            }
        }

        fetchMeals()
    },[])

    if (error) return <p>{error.message}</p>

    return (
        <div id="meals">
            {availableMeals.map((meal) =>
                <MealItem key={meal.id}
                          name={meal.name}
                          price={meal.price}
                          description={meal.description}
                          image={meal.image} />
            )}

        </div>
    );
}

export default Meals;