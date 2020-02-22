import React, {Component} from 'react'
import CarouselBox from "../Components/CarouselBox";
import {Container, CardDeck, Card, Button} from "react-bootstrap"

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4"> Our team </h2>
                    <CardDeck className="m-4">
                        <Card bg="warning" border="success" text="primary">
                            <Card.Img variant="top"
                                      src="https://avatars.mds.yandex.net/get-pdb/1630946/522d60b2-c9d4-4c94-838b-e78ed591d3f4/s1200"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Same text. Рыба текст ни о чем</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Same text. Рыба текст ни о чем</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <Card.Img variant="bottom"
                                      src="https://avatars.mds.yandex.net/get-pdb/1630946/522d60b2-c9d4-4c94-838b-e78ed591d3f4/s1200"/>
                        </Card>
                        <Card>
                            <Card.Img variant="top"
                                      src="https://avatars.mds.yandex.net/get-pdb/1630946/522d60b2-c9d4-4c94-838b-e78ed591d3f4/s1200"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Same text. Рыба текст ни о чем</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top"
                                      src="https://avatars.mds.yandex.net/get-pdb/1630946/522d60b2-c9d4-4c94-838b-e78ed591d3f4/s1200"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Same text. Рыба текст ни о чем</Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
