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

const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const go = () => {
  lighten("green");
  sleep(1000)
    .then(() => {
      lighten("yellow");
      return sleep(200);
    })
    .then(() => {
      lighten("red");
      return sleep(500);
    })
    .then(go);
};

go();
