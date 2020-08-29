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

const timer = (color, timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      lighten(color);
      resolve(color);
    }, timeout);
  });
};
const run = async () => {
  await timer("green", 500);
  await timer("yellow", 200);
  await timer("red", 300);
  run();
};

run();
