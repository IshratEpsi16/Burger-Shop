import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

let Footer = () => {
    return (
        <div>





            <Card className="mt-3" bg='dark' text='white' >
                <Card.Header text='white'></Card.Header>
                <Card.Body>
                    <div class='row'>
                        <div class='col-4'>
                            <h5>Stay Connected</h5>




                            <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;&nbsp;
                            <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;



                            <i class="fa-brands fa-twitter "></i>&nbsp;&nbsp;&nbsp;
                            <i class="fa-brands fa-youtube"></i>

                        </div>
                        <div class='col-4'>
                            <h1 className='m-5'>Burger Xpress</h1>
                        </div>
                        <div class='col-4'>
                            <h5>Our Branches</h5>
                            <p class="lh-1">Banani</p>
                            <p class="lh-1">Wari</p>
                            <p class="lh-1">Dhanmondi</p>
                            <p class="lh-1">Uttara</p>
                            <p class="lh-1">Baily Road</p>
                        </div>
                    </div>
                    <hr />
                    <p style={{ textAlign: 'left' }} className='m-2 opacity-75'>email us: burgerxpress@gmail.com</p>


                </Card.Body>
                <Card.Footer className="text-muted mt-4">&copy;Burger Xpress. All Right Reserved</Card.Footer>
            </Card>








        </div>
    );
}
export default Footer;