import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap/'

class HomeCard extends Component {
    render() {
        return (
            <Row xs={1} md={3} className="g-4">

                {this.props.homeData.map((item,index) => {
                    return (
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.strDrinkThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strDrink}</Card.Title>
                                    <Button variant="primary" onClick={()=>this.props.addToFavFunc(item)}>Add to Favoraite</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })

                }
            </Row>

        )
    }
}

export default HomeCard
