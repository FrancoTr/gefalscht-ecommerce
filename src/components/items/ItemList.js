import React from "react";
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <Container>
      <Row xs={1} md={2} classNam="g-4">
        {items.map((item) => {
          return (
            <Col>
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
