import React from "react";
import Login from "./Login";
import Game from "./Game";
import Navbar from "./Navbar";
import Endgame from "./EndGame";

class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };

  render() {
    const { showLogin, showEndGame, score, name } = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <Endgame newgame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} />
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}
