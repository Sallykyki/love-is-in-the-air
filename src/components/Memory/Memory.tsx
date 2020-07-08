import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

interface IProps {
  image: string;
  caption: string;
}

const Memory: React.FunctionComponent<IProps> = ({ image, caption }) => {
  return (
    <Row>
      <Col lg={{ span: 8, offset: 2 }}>
        <Figure className="component-Memory">
          <div
            className="component-Memory__img"
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
          {/* <Figure.Image className="component-Memory__img" src={image} /> */}
          <Figure.Caption className="component-Memory__caption">
            {caption}
          </Figure.Caption>
        </Figure>
      </Col>
    </Row>
  );
};

export default Memory;
