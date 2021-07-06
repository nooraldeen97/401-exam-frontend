import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap/'

class MyFavCard extends Component {
    render() {
        return (
            <Row xs={1} md={3} className="g-4">

                {this.props.FavData.map((item,index) => {
                    return (
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Button variant="primary" onClick={()=>this.props.deleteFunc(index)} >Delete</Button>
                                    <Button variant="primary" onClick={()=>this.props.UpdateFunc(index)} >Update</Button>
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

export default MyFavCard
