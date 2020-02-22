import React, {Component} from 'react'
import CarouselBox from "../Components/CarouselBox";
import {Container, Row, Col, Media, Card, ListGroup} from "react-bootstrap"

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                hight={150}
                                className="mr-3"
                                src="https://blog.hyegyeong.com/assets/images/javascript.jpeg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis
                                    egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis
                                    magna ac sem. Curabitur nec.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                hight={150}
                                className="mr-3"
                                src="https://blog.hyegyeong.com/assets/images/javascript.jpeg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis
                                    egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis
                                    magna ac sem. Curabitur nec.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                hight={150}
                                className="mr-3"
                                src="https://blog.hyegyeong.com/assets/images/javascript.jpeg"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis
                                    egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis
                                    magna ac sem. Curabitur nec.</p>
                            </Media.Body>

                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-4">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>JS</ListGroup.Item>
                                <ListGroup.Item>React</ListGroup.Item>
                                <ListGroup.Item>Meteor</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title>
                                    Side widget
                                </Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis
                                    egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis
                                    magna ac sem. Curabitur nec.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
