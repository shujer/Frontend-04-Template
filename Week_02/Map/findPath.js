const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

async function findPath(mapData, start, end, SIZE = 100) {
  const distance = (point) => {
    return (point[0] - end[0]) ** 2 + (point[1] - end[1]) ** 2;
  };
  let table = Object.create(mapData);
  let queue = new BinaryHeap([start], (a, b) => distance(a) - distance(b));
  async function insert(x, y, pre) {
    if (x >= SIZE || x < 0 || y >= SIZE || y < 0) return;
    if (table[y * SIZE + x]) return;
    // await sleep(30);
    table[y * SIZE + x] = pre;
    map.children[y * SIZE + x].style.backgroundColor = "#8CD790";
    queue.insert([x, y]);
  }

  while (queue.length) {
    let [x, y] = queue.take();
    if (x === end[0] && y === end[1]) {
      let path = [];
      while (x !== start[0] || y !== start[1]) {
        path.push(table[y * SIZE + x]);
        [x, y] = table[y * SIZE + x];
        await sleep(10);
        map.children[y * SIZE + x].style.backgroundColor = "orange";
      }
      return path;
    }
    await insert(x, y + 1, [x, y]);
    await insert(x, y - 1, [x, y]);
    await insert(x - 1, y, [x, y]);
    await insert(x + 1, y, [x, y]);
    await insert(x - 1, y - 1, [x, y]);
    await insert(x + 1, y - 1, [x, y]);
    await insert(x - 1, y + 1, [x, y]);
    await insert(x + 1, y + 1, [x, y]);
  }
  return false;
}
