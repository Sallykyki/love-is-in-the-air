import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Memory from "../Memory";

interface IMemory {
  image: string;
  caption: string;
}
interface IProps {
  year: number;
  memories: IMemory[];
}

const MemoriesCard: React.FunctionComponent<IProps> = ({ year, memories }) => {
  return (
    <Accordion className="component-MemoriesCard">
      <Card>
        <Card.Header>
          <Accordion.Toggle
            className="component-MemoriesCard__btn"
            as="button"
            eventKey="0"
          >
            {year}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="component-MemoriesCard__body">
            {memories.map((memory, idx) => (
              <Memory image={memory.image} caption={memory.caption} />
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default MemoriesCard;
