import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Home = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
        .then(res => res.json())
        .then(data => {
            setMeals(data.meals)
        })
    }, [])

    return (
        <div className='w-100'>
            <div className='d-flex justify-content-center w-100 mx-auto my-5'>
                <div style={{width: '250px'}} className='me-2'>
                <Form.Control type="text" placeholder="Search Your Favorite Recipe" />
                </div>
                <Button>Search</Button>
            </div>
        <div className='container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mx-auto my-4'>
            {
            meals.map(meal => <div key={meal.idMeal} className='col'>
                <Card border='info' style={{minHeight: '600px'}}>
            <Card.Img variant="top" src={meal.strMealThumb} />
            <Card.Body className='position-relative p-2'>
                <Card.Title>{meal.strMeal}</Card.Title>
                <Card.Text>
                {meal.strInstructions.slice(0, 150) + '...'}
                </Card.Text>
                <Button className='position-absolute bottom-0 mb-2 end-0 me-2' variant="primary">Details</Button>
            </Card.Body>
            </Card>
            </div>
            )
            }
        </div>
        </div>
    );
};

export default Home;