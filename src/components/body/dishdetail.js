import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardText } from 'reactstrap';
import Accordion from 'react-bootstrap/Accordion';
import LoadComments from "./loadcomments"

let DishDetail = props => {

    return (
        <div>

            <Card className='mt-2' style={{ width: '30rem' }}>

                <Card.Img src={props.dish.image} width='0%' />
                <Card.Title style={{ textAlign: 'left' }} className='m-2'><h5>{props.dish.name}</h5></Card.Title>
                <CardText style={{ textAlign: 'left' }} className='m-2 text-secondary'>


                    <p className='text-secondary'>{props.dish.description}</p>

                    <p className='text-secondary'>Ingrediants : {props.dish.ingrediants}</p>
                    <p>Size : {props.dish.size}</p>
                    <p>Price : {props.dish.price} /=</p>


                    <hr />

                    <Accordion className="mb-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>All Reviews</Accordion.Header>
                            <Accordion.Body>
                                <LoadComments comment_para={props.dish.comments} />
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <div className="d-grid gap-2 mb-3">
                        <Button variant="warning" size="lg" className='text-white'>Order Now</Button>
                    </div>















                </CardText>
            </Card>





        </div>
    );
}

export default DishDetail;