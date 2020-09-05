const sleep = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
const isInArea = ([x, y]) => {
  return !(x >= SIZE || x < 0 || y >= SIZE || y < 0);
};

/**
 * 抽离计算临近点的函数，方便自定义
 */
const findSurroundPoint = ([x, y]) => {
  return [
    [x, y + 1],
    [x, y - 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y - 1],
    [x + 1, y - 1],
    [x - 1, y + 1],
    [x + 1, y + 1],
  ];
};
/**
 * 如果图形中只允许朝上下左右四个方向移动，则可以使用曼哈顿距离（Manhattan distance）。
 * 如果图形中允许朝八个方向移动，则可以使用对角距离。
 * 如果图形中允许朝任何方向移动，则可以使用欧几里得距离（Euclidean distance）
 */
const distance = (point, end) => {
  return (point[0] - end[0]) ** 2 + (point[1] - end[1]) ** 2;
};

async function findPath(mapData, start, end) {
  let table = Object.create(mapData);
  let queue = new BinaryHeap([[...start, 0]], (a, b) => a[2] - b[2]);
  const insert = async ([x, y, G], pre) => {
    queue.insert([x, y, G]);
    table[y * SIZE + x] = pre;
    map.children[y * SIZE + x].style.backgroundColor = "#8CD790";
  };

  while (queue.length) {
    let [x, y, G] = queue.take();
    if (x === end[0] && y === end[1]) {
      let path = [];
      while (x !== start[0] || y !== start[1]) {
        path.push(table[y * SIZE + x]);
        [x, y] = table[y * SIZE + x];
        await sleep(5);
        map.children[y * SIZE + x].style.backgroundColor = "orange";
      }
      console.log(path.length);
      return path;
    }

    let points = findSurroundPoint([x, y]);
    for (let point of points) {
      // 这里我们通过在地图上标记不额外声明一个变量存储
      // 在区域内，且不是障碍物（1），且没有走过（point）
      if (isInArea(point) && !table[point[1] * SIZE + point[0]]) {
        // 在插入的时候计算 distance，减少重复计算
        // 使用一个累计值，能够优化启发路径的准确性，非最优解
        await insert([...point, distance(point, end) + G], [x, y]);
      }
    }
  }
  return false;
}
