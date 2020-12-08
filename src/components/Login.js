import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="grey" textAlign="center">
        <Image src={logo} /> Log-in to your account
      </Header>
      <Form
        size="large"
        action="http://localhost:5000/auth/login"
        method="POST">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
            name="email"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name="password"
          />

          <Button color="blue" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        <Link to="/register">New to us? Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
