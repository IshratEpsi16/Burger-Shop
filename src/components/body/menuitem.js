import React from 'react';
import { CardImgOverlay } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
let MenuItem = props => {
    console.log(props)
    return (
        <div>

            <Card style={{ width: '22rem' }} className='mt-2'>
                <Card.Title className='mt-2 text-stone-400'>{props.dishes_para.name}</Card.Title>
                <Card.Img variant="top" src={props.dishes_para.image} style={{ opacity: '0.7' }} />

                <Card.Body>
                    <p className='text-secondary'>{props.dishes_para.ingrediants}</p>
                    <div className="d-grid gap-2">
                        <Button variant="warning" size="lg" className='text-white rounded-full ' onClick={props.key_2}>More Details</Button>
                    </div>

                </Card.Body>
            </Card>



        </div>

    );
}
export default MenuItem;



