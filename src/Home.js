import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let navigate = useNavigate();

    const [meals, setMeals] = useState([]);
    const [findMeals, setFindMeals] = useState('');
    const [getMeals, setGetMeals] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${getMeals}`)
        .then(res => res.json())
        .then(data => {
            setMeals(data.meals);
            setLoading(false);
        })
    }, [getMeals]);

    const searchMeals = () => {
        setGetMeals(findMeals)
    }

    return (
        <div className='w-100'>
            <div className='d-flex justify-content-center w-100 mx-auto my-5'>
                <div style={{width: '250px'}} className='me-2'>
                <Form.Control onChange={(e) => setFindMeals(e.target.value)} type="text" placeholder="Search Your Favorite Recipe" />
                </div>
                <Button onClick={searchMeals}>Search</Button>
            </div>
            <div className='ms-4'>
        {
            meals !== null &&
            <h3>You have got {meals.length} {meals.length >1 ? 'recipes' : 'recipe'}</h3>}
      </div>

            {loading && <Loading/>}
        <div className='container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto my-4'>
            {
             meals === null ? <h2 className='w-100 mt-5 text-center'>Your Result Is Not Found!</h2> : meals.map(meal => <div key={meal.idMeal} className='col'>
                <Card border='info' style={{minHeight: '600px'}}>
            <Card.Img variant="top" src={meal.strMealThumb} />
            <Card.Body className='position-relative p-2'>
                <Card.Title>{meal.strMeal}</Card.Title>
                <Card.Text>
                {meal.strInstructions.slice(0, 150) + '...'}
                </Card.Text>
                <Button onClick={() => {navigate(`/recipedetails/${meal.idMeal}`)}} className='position-absolute bottom-0 mb-2 end-0 me-2' variant="primary">Details</Button>
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