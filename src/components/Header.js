import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container, Image } from "semantic-ui-react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <Menu secondary>
      <Container>
        <Menu.Item name="logo">
          <Link to="/">
            <Image src={logo} alt="logo" width={150} />
          </Link>
        </Menu.Item>
        <Menu.Item position="right" name="charts">
          <Link to="/charts">charts</Link>
        </Menu.Item>
        <Menu.Item name="login">
          <Link to="/login">login</Link>
        </Menu.Item>

        <Menu.Item name="register">
          <Link to="/register">register</Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
