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

const go = async () => {
  while (true) {
    lighten("green");
    await sleep(1000);
    lighten("yellow");
    await sleep(200);
    lighten("red");
    await sleep(500);
  }
};

go();
