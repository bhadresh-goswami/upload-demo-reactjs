import React, { Component } from 'react';
import {
    Form,
    Label,
    Control,
    Text,
    Button,
    Accordion,
    Card
} from 'react-bootstrap';

import ModapPopup from './modalpopup';

class TextField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            EmailId: "", Password: ""
        };
    }
    changeHandler(element) {

        this.setState({ [element.target.name]: element.target.value });
        console.log(this.state);

    }
    clickHandler() {

    }
    render() {
        return (
            <div>


                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Login
    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                                <div className="col-8">
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control name="EmailId" type="email" placeholder="Enter email" onChange={(element) => this.changeHandler(element)} />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                        </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name="Password" type="password" placeholder="Password" onChange={(element) => this.changeHandler(element)} />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" onClick={() => this.clickHandler()}>
                                            Submit
                    </Button>
                                    </Form>


                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Forget Password?
    </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body

                            <ModapPopup/>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </div>
        );
    }
}

export default TextField;