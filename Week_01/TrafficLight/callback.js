const Lights = {
  red: document.querySelector(".light_item.red"),
  green: document.querySelector(".light_item.green"),
  yellow: document.querySelector(".light_item.yellow"),
};
const LightKeys = Object.keys(Lights);
const lighten = (color) => {
  LightKeys.forEach((key) => {
    if (key === color) {
      Lights[key].classList.add("blink");
    } else {
      Lights[key].classList.remove("blink");
    }
  });
};

const go = async () => {
  lighten("green");
  setTimeout(() => {
    lighten("yellow");
    setTimeout(() => {
      lighten("red");
      setTimeout(() => {
        go();
      }, 5000);
    }, 2000);
  }, 10000);
};

go();
