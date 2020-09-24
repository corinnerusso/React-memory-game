import React from "react";

class Navbar extends React.Component {
  render() {
    const { name, score } = this.props;

    return (
      <div className="navbar">
        <div className="game_title">MEMORY GAME</div>
        <div className="name">{name}</div>
        <div className="score"> Score: {score}</div>
      </div>
    );
  }
}

export default Navbar;
