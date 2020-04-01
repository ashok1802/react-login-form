import React, { Component, useState } from 'react';
import {

    Form,
    Card,
    CardHeader,
    CardBody,
    Button,
    FormGroup,
    Label,
    Input

} from "reactstrap";
export default class LoginFrm extends Component {

    state = {
        email: "",
        password: ""
    };

    onEmailChange = e => {
        this.setState({ email: e.target.value })
    };

    onPassChange = e => {
        this.setState({ password: e.target.value })
    };

    render() {
        return (

            <Form className="login-form">
                <Card>

                    <CardHeader>Login</CardHeader>
                    <CardBody>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                placeholder="Email"
                                type="email"
                                value={this.state.email}
                                OnChange={this.onEmailChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                placeholder="Password"
                                type="password"
                                value={this.state.password}
                                OnChange={this.onPassChange}
                            />
                        </FormGroup>


                    </CardBody>
                    <Button type="submit">Submit</Button>
                </Card>

            </Form>
        );
    }
}
