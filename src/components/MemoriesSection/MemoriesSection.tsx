import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MemoriesCard from "../MemoriesCard";

const Cards = [
  {
    year: 2015,
    memories: [
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
      {
        image: "/images/2015-DuongLam.jpg",
        caption: "Lorem ipsum dolor sit amet",
      },
      { image: "/images/2015-hoa.jpg", caption: "Lorem ipsum dolor sit amet" },
      {
        image: "/images/2015-TamDao.jpg",
        caption: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    year: 2016,
    memories: [
      { image: "/images/2016-02.jpg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2016-05.jpeg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2016-05.jpg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2016-08.jpg", caption: "Lorem ipsum dolor sit amet" },
    ],
  },
  {
    year: 2017,
    memories: [
      { image: "/images/2017-04-1.jpg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2017-04-2.jpg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2017-10.jpg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2017-10-2.jpg", caption: "Lorem ipsum dolor sit amet" },
    ],
  },
  {
    year: 2018,
    memories: [
      { image: "/images/2018-01.jpeg", caption: "Lorem ipsum dolor sit amet" },
      {
        image: "/images/2018-10-1.jpeg",
        caption: "Lorem ipsum dolor sit amet",
      },
      {
        image: "/images/2018-10-2.jpeg",
        caption: "Lorem ipsum dolor sit amet",
      },
      {
        image: "/images/2018-10-3.jpeg",
        caption: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    year: 2019,
    memories: [
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
    ],
  },
  {
    year: 2020,
    memories: [
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
      { image: "/images/2015-Cam.jpeg", caption: "Lorem ipsum dolor sit amet" },
    ],
  },
];

const MemoriesSection: React.FunctionComponent = () => {
  return (
    <Container>
      {Cards.map((card, idx) => (
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <MemoriesCard year={card.year} memories={card.memories} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default MemoriesSection;
