import React, {Component} from 'react'
import CarouselBox from "../Components/CarouselBox";
import {Container, Row, Col, Media, Card, ListGroup} from "react-bootstrap"
import {forEach} from "react-bootstrap/cjs/ElementChildren";

let testData = [
    {
        blogImage : [150, 150, "mr-3", "https://blog.hyegyeong.com/assets/images/javascript.jpeg"],
        title: "Blog post 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis\n" +
            "egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis\n" +
            "magna ac sem. Curabitur nec."
    },

    {
        blogImage : [150, 150, "mr-3", "https://blog.hyegyeong.com/assets/images/javascript.jpeg"],
        title: "Blog post 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis\n" +
            "egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis\n" +
            "magna ac sem. Curabitur nec."
    },

    {
        blogImage : [150, 150, "mr-3", "https://blog.hyegyeong.com/assets/images/javascript.jpeg"],
        title: "Blog post 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis\n" +
            "egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis\n" +
            "magna ac sem. Curabitur nec."
    },

    {
        blogImage : [150, 150, "mr-3", "https://blog.hyegyeong.com/assets/images/javascript.jpeg"],
        title: "Blog post 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis\n" +
            "egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis\n" +
            "magna ac sem. Curabitur nec."
    },

    {
        blogImage : [150, 150, "mr-3", "https://blog.hyegyeong.com/assets/images/javascript.jpeg"],
        title: "Blog post 5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nunc dui. Duis\n" +
            "egestas, neque ut porta sodales, velit neque efficitur lectus, id feugiat felis\n" +
            "magna ac sem. Curabitur nec."
    },

];

let categories = ["Js", "React", "Meteor", "Java(Рулит)"];

export default class Blog extends Component {

    render() {

            let list = testData.map((post)=>{
                return (
                    <Media className="m-5">
                        <img
                            width={post.blogImage[0]}
                            hight={post.blogImage[1]}
                            className={post.blogImage[2]}
                            src={post.blogImage[3]}
                        />
                        <Media.Body>
                            <h5>{post.titile}</h5>
                            <p>{post.text}</p>
                        </Media.Body>
                    </Media>
                )
            });

            let categ = categories.map((cat)=>{
                return <ListGroup.Item>{cat}</ListGroup.Item>
            })

        return (
            <Container>
                <Row>
                    <Col md="9">

                        {list}

                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-4">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                {categ}
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
