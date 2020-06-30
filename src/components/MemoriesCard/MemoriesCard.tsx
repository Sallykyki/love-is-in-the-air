import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import cover from "../../assets/images/hero-bg.jpg";

const MemoriesCard: React.FunctionComponent = () => {
  return (
    <Accordion className="component-MemoriesCard">
      <Card>
        <Card.Img src={cover} />
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
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