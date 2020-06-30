import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cover from "../../assets/images/hero-bg.jpg";
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
          <Accordion.Toggle as="figure" eventKey="0">
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
// interface IProps {}

// interface IState {
//   eventKey: string;
// }

// class MemoriesCard extends React.Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = { eventKey: "0" };
//   }

//   toggleCard = () => {
//     this.setState({ eventKey: "0" });
//   };
//   render() {
//     console.log(this.state.eventKey);
//     return (
//       <Accordion>
//         <Card>
//           <Card.Header>
//             <Accordion.Toggle
//               as={Button}
//               variant="link"
//               eventKey={"0"}
//               // onClick={this.toggleCard}
//             >
//               Click me!
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey={"0"}>
//             <Card.Body>Hello! I'm the body</Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
//     );
//   }
// }

export default MemoriesCard;
