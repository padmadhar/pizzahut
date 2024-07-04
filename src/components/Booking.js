import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import  Form  from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Booking(){
    return(
        <div>
            <Container className="mt-5">
                <h1 className="text-start " style={{fontFamily: "brush script mt"}}>Book A Table</h1>

                <Row>
                    <Col>
                    <Form>
                    <Form.Group controlId="exampleForm.controlInput1 " className="mb-3">
                    <Form.Control type="text" placeholder="Your Name" /></Form.Group>
                    <Form.Group controlId="exampleForm.controlInput2" className="mb-3">
                    <Form.Control type="text" placeholder="Phone Number" /></Form.Group>
                    <Form.Group controlId="exampleForm.controlInput3" className="mb-3">
                    <Form.Control type="Email" placeholder="Your Email" /></Form.Group>
                    <Form.Group controlId="exampleForm.controlInput1 " className="mb-3">
                       <Form.Control as="select">
                        <option>How Many Person?</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                       </Form.Control>
                       
                        </Form.Group>
                        <Form.Group controllId="exampleForm.controlInput4" className="mb-3">
                    <Form.Control type="date" /></Form.Group>
                    <Button variant="warning" className=" text-white fs-5 px-5 rounded-pill mt-4  float-start">Book Now</Button>

                    </Form>
                    </Col>
                    <Col>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966517.1974682035!2d72.
                    78120256249994!3d18.866761131800203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be5a1648fe13%3A0x3455afc11e87b019!2sDomino
                    &#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1711084961742!5m2!1sen!2sin" width="600" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Booking