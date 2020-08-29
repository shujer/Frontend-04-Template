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

const happen = (element, eventName) => {
  return new Promise((resolve) => {
    element.addEventListener(eventName, resolve, { once: true });
  });
};

const nextBtn = document.getElementById("next");

const go = async () => {
  while (true) {
    lighten("green");
    await happen(nextBtn, "click");
    lighten("yellow");
    await happen(nextBtn, "click");
    lighten("red");
    await happen(nextBtn, "click");
  }
};

go();
