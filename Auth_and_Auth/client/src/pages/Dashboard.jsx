import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useProvideAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import api from "../utils/api.config";

function Dashboard() {
  const { auth } = useProvideAuth();

  console.log(auth);

  useEffect(() => {
    api
      .get("/protected")
      .then(() =>
        console.log(
          "If you can read this, the protected data was accessed successfully"
        )
      )
      .catch((err) =>
        console.log(
          "If you can read this, the data was not accessible because you're not logged in."
        )
      );
  }, [auth.isAuthenticated]);

  if (auth.isAuthenticated === false) {
    return <Navigate to="/signin" />;
  }

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
}

export default Dashboard;
