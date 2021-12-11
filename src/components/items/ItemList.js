import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Container>
      <Row>
        {items.map((item) => {
          return (
            <Col md="4" key={item.id}>
              <Item
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                pictureUrl={item.pictureUrl}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ItemList;
