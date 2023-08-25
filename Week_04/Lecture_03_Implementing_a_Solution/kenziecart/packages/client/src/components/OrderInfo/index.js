import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import "./OrderInfo.scss";

const OrderInfo = ({ order }) => {
  return (
    <Container className="order-card">
      <Row className="mb-2">
        <Col className="mb-2" xs={4}>
          <Col as="h5" xs={12}>
            Date Placed
          </Col>
          <Col as="span" xs={12}>
            {new Date(order.createdAt).toLocaleDateString()}
          </Col>
        </Col>
        <Col className="mb-2" xs={4}>
          <Col as="h5" xs={12}>
            Shipped Status
          </Col>
          <Col as="span" xs={12}>
            TBD
          </Col>
        </Col>
        <Col className="mb-2" xs={4}>
          <Button variant="primary">View Details</Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={4}>
          <Col as="h5" xs={12}>
            Total
          </Col>
          <Col as="span" xs={12}>
            ${order.orderTotal}
          </Col>
        </Col>
        <Col xs={4}>
          <Col as="h5" xs={12}>
            Products Ordered
          </Col>
          <Col as="ul" xs={12}>
            {order.items.map((item) => (
              <img
                className="product-thumbnail"
                key={item._id}
                src={item.productImage}
                alt={item.name}
              />
            ))}
          </Col>
        </Col>
        <Col xs={4}>
          <Button variant="outline-primary">Order Again</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderInfo;
