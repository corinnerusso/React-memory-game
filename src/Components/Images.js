import React from "react";
import { images } from "./Images/index";

class Images extends React.Component {
  birds = [];

  handleClick = (event) => {
    let bird = event.target;
    if (bird.getAttribute("check") === "found") {
      return;
    }

    if (bird !== this.birds[0]) {
      this.switch(bird);
      this.birds.push(bird);
    } else {
      this.switch(bird);
      this.birds = [];
    }

    if (this.birds.length > 2) {
      if (!this.checkName(this.birds[0], this.birds[1])) {
        this.switch(this.birds[0]);
        this.switch(this.birds[1]);
        this.birds.shift();
        this.birds.shift();
      } else {
        this.birds.shift();
        this.birds.shift();
      }
    }
    let allPictures = document.getElementsByClassName("image-blank");
    if (allPictures.length < 1) {
      this.props.endGame(true);
      let reset = document.getElementsByClassName("image");
      for (let i = 0; i < reset.length; i++) {
        reset[i].classList.add("image-blank");
        reset[i].setAttribute("check", "false");
        this.birds = [];
      }
    }
  };

  checkName = (bird1, bird2) => {
    if (bird1.getAttribute("name") === bird2.getAttribute("name")) {
      bird1.setAttribute("check", "found");
      bird2.setAttribute("check", "found");
      return true;
    }
    return false;
  };

  switch = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false");
      target.classList.add("image-blank");
    } else {
      target.setAttribute("check", "true");
      target.classList.remove("image-blank");
    }
  };

  render() {
    return (
      <div className="images">
        {images
          .sort(() => Math.random() - 0.5)
          .map((element) => {
            return (
              <div
                className="image image-blank"
                name={element.name}
                style={{ background: `url(${element.pic})` }}
                check="flase"
                onClick={this.handleClick}
              ></div>
            );
          })}
      </div>
    );
  }
}

export default Images;
