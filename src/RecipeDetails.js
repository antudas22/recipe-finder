import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {

    const {id} = useParams();
    const [mealDetails, setMealDetails] = useState([]);
    const {
        strMeal,
        strArea,
        strInstructions,
        strMealThumb,
        strTags,

    } = mealDetails;

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMealDetails(data.meals[0])
        })
    }, [id, setMealDetails])

    return (
        <div className='container d-flex justify-content-center my-5'>
            <Card className='w-75'>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>
          {strInstructions}
        </Card.Text>
        <div className='d-flex justify-content-between'><h6>Area: {strArea}</h6> <h6>Tags: {strTags}</h6></div>
      </Card.Body>
    </Card>
        </div>
    );
};

export default RecipeDetails;