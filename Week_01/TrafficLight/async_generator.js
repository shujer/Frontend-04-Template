const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

async function* counter() {
  let i = 0;
  while (true) {
    await sleep(1000);
    yield i++;
  }
}

async function run() {
  for await (let i of counter()) {
    console.log(i);
  }
}

run();
