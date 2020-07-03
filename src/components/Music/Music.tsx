import React from "react";
import Button from "react-bootstrap/Button";
import MusicIcon from "../../assets/icons/music-note.svg";
interface IProps {}

interface IState {
  play: boolean;
}

class Music extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { play: false };
  }

  audio = new Audio("/music/TinhThoiXotXa-LamTruong.mp3");

  componentDidMount() {
    this.audio.addEventListener("ended", () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ play: false })
    );
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };
  render() {
    return (
      <Button className="component-Music" onClick={this.togglePlay}>
        <img
          className="component-Music__animated-icon"
          src={MusicIcon}
          alt="love song"
        />
        <span className="component-Music__btn-label">
          {this.state.play ? "Pause song" : "Play love song"}
        </span>
      </Button>
    );
  }
}

export default Music;
