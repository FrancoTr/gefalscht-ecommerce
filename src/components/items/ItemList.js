import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Container>
      <Row className="mx-auto my-4">
        {items.map((item) => {
          return (
            <Col key={item.id}>
              <Item id={item.id} title={item.title} image={item.image} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemList;
