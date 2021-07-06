import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap/';


class ModalForm extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update your Favorite Drink</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={this.props.updateFavDataFunc}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.name} name='drinkName' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.img} name='image' />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>

                </Modal.Body>

            </Modal>
        )
    }
}

export default ModalForm
