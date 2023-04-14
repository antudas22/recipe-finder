import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import loadingImg from './assets/loading-img.jpg'

const Loading = () => {
    return (
        <div className='container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto my-4'>
        <div className='col'>
        <Card>
            <Card.Img variant="top" src={loadingImg} />
            <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
        </div>
        <div className='col'>
        <Card>
            <Card.Img variant="top" src={loadingImg} />
            <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
        </div>
        <div className='col'>
        <Card>
            <Card.Img variant="top" src={loadingImg} />
            <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
        </div>
        </div>
    );
};

export default Loading;