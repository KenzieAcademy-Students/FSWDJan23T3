import { useEffect } from "react";
import useQuery from "hooks/useQuery";
import { findOrdersByEmail } from "utils/axiosService";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { OrderInfo } from "components";
import { Container } from "react-bootstrap";

const OrdersPage = () => {
  const query = useQuery();
  const email = query.get("email");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!email) return;
    findOrdersByEmail(email)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        toast.error("No orders with that email could be found.");
      });
  }, [email]);

  if (!email) {
    toast.error("Email required.");
    return <Redirect to="/" />;
  }

  return (
    <Container className="orders-column">
      {orders.map((order) => (
        <OrderInfo key={order._id} order={order} />
      ))}
    </Container>
  );
};

export default OrdersPage;
