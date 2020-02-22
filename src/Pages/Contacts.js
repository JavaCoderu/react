import React, {Component} from 'react'
import {Form, Buttom, Container, Button} from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h1 className="text-center">Contact us </h1>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Example text</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placholder="Enter email" />
                    <Form.Text>
                        Well never share your email
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckBox">
                    <Form.Check tupe="checkbox" label="Check me out"/>
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Container>
        )
    }
}
