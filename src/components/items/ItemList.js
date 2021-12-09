import React from "react";
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import Item from "./Item";
import itemDataMock from "./ItemDataMock.json";

const ItemList = () => {
  return (
    <Container>
      <Row xs={1} md={2} classNam="g-4">
        {itemDataMock.map((item) => {
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
