import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Checkbox } from "semantic-ui-react";

const Register = () => {
  return (
    <div className="register">
      <h1>register</h1>
      <Form action="http://localhost:5000/auth/register" method="POST">
        <Form.Field>
          <label>First Name</label>
          <input placeholder="Mike" name="name" />
        </Form.Field>
        <Form.Field>
          <label>Your Email</label>
          <input type="email" placeholder="example@gmail.com" name="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="password" name="password" />
        </Form.Field>
        {/* <Form.Field>
          <label>Confirm Password</label>
          <input placeholder="password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field> */}
        <Button type="submit">Submit</Button>
      </Form>
      <h4>already have an account?</h4>
      <Link to="/login">
        <Button basic>login</Button>
      </Link>
    </div>
  );
};

export default Register;
