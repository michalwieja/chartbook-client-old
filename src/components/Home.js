import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="home">
      <h1>home</h1>
      <Link to="/login">
        <Button basic>login</Button>
      </Link>
      <Link to="/register">
        <Button basic>register</Button>
      </Link>
    </div>
  );
};

export default Home;
