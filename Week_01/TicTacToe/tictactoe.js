function clone(arr) {
  return Object.create(arr);
}

function createPattern(size) {
  return new Array(size * size).fill(0);
}

function onInnerMessage(role, status) {
  if (status === "win") {
    alert(`棋子 ${role} ==> ${status}`);
  }
  console.log(`棋子 ${role} ==> ${status}`);
}

function Game({ root, size = 3, onMessage = onInnerMessage }) {
  this.board = document.getElementById(root);
  const pattern = createPattern(size);
  this.pattern = pattern;
  this.size = size;
  this.color = 1;
  this.onMessage = onMessage;
  this.show(pattern);
  this.start();
}

/**
 * @description 根据颜色获取当前执子的对象
 * @param {Number} color
 */
function getRole(color) {
  return color === 2 ? "⭕" : color === 1 ? "❌" : "";
}

/**
 * @description 每次落子后重新绘制
 */
Game.prototype.show = function (pattern) {
  // 使用文档片段缓存，减少页面重绘
  const newCells = document.createDocumentFragment();
  for (let y = 0; y < this.size; y++) {
    for (let x = 0; x < this.size; x++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add(
        pattern[y * this.size + x] === 0 ? "enable" : "disable"
      );
      cell.style.height = `calc(${100 / this.size}% + 1px)`;
      cell.style.width = `calc(${100 / this.size}% + 1px)`;
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.innerText = getRole(pattern[y * this.size + x]);
      newCells.appendChild(cell);
    }
  }
  this.board.innerHTML = "";
  this.board.appendChild(newCells);
};

/**
 * @description 开始游戏，监听鼠标点击事件
 */
Game.prototype.start = function () {
  // 事件委托监听，减少内存占用
  this.board.removeEventListener("click", this.boardListener);
  // 保留事件函数，重新监听前要移除之前的监听函数，防止重复
  this.boardListener = (event) => {
    event.stopPropagation();
    let { x, y } = event.target.dataset;
    if (x !== undefined && y !== undefined) {
      this.userMove(parseInt(x), parseInt(y));
    }
  };
  this.board.addEventListener("click", this.boardListener);
};

Game.prototype.stop = function () {
  this.board.removeEventListener("click", this.boardListener);
};

/**
 * @description 重新开始游戏
 */
Game.prototype.restart = function () {
  const pattern = createPattern(this.size);
  this.pattern = pattern;
  this.color = 1;
  this.show(pattern);
  this.start();
};

/**
 * @description 重设棋盘大小
 * @param {Number} size
 */
Game.prototype.resize = function (size) {
  const pattern = createPattern(size);
  this.pattern = pattern;
  this.color = 1;
  this.size = size;
  this.show(pattern);
  this.start();
};

/**
 * @description 落子
 * @param {Number} x
 * @param {Number} y
 */
Game.prototype.userMove = function (x, y) {
  this.pattern[y * this.size + x] = this.color;
  this.show(this.pattern);
  let role = getRole(this.color);
  if (this.calculateWin(this.pattern, x, y)) {
    this.stop();
    this.onMessage(role, "win");
  } else {
    this.computerMove(this.pattern, 3 - this.color);
  }
  this.color = 3 - this.color;
};

/**
 * @description 人机对战
 * @param {Number} x
 * @param {Number} y
 */
Game.prototype.computerMove = function (pattern, color) {
  let choice = this.bestChoice(pattern, color);
  if (choice.point) {
    pattern[choice.point[1] * this.size + choice.point[0]] = color;
    if (this.calculateWin(pattern, choice.point[0], choice.point[1])) {
      this.onMessage(getRole(this.color), "win");
    }
    this.color = 3 - this.color;
    this.show(pattern);
  }
};

/**
 * @description 扫描棋盘中空白的位置
 * @param {Array<Array<Number>>} _pattern
 * @param {Number} color
 */
Game.prototype.calculateWillWin = function (p, color) {
  let pattern = clone(p);
  for (let y = 0; y < this.size; y++) {
    for (let x = 0; x < this.size; x++) {
      if (pattern[y * this.size + x]) continue;
      pattern = clone(p);
      pattern[y * this.size + x] = color;
      if (this.calculateWin(pattern, x, y)) {
        return [x, y];
      }
    }
  }
  return null;
};

/**
 * @description 剪枝：每次只检查当前这一步是否满足条件，不做全局扫描
 * @param {Array<Array<Number>>} pattern
 * @param {Number} x
 * @param {Number} y
 */
Game.prototype.calculateWin = function (pattern, x, y) {
  let color = pattern[y * this.size + x];
  // 检查行
  {
    let win = true;
    for (let i = 0; i < this.size; i++) {
      if (pattern[y * this.size + i] !== color) {
        win = false;
      }
    }
    if (win) {
      return true;
    }
  }
  // 检查列
  {
    let win = true;
    for (let i = 0; i < this.size; i++) {
      if (pattern[i * this.size + x] !== color) {
        win = false;
      }
    }
    if (win) {
      return true;
    }
  }
  // 由左到右 ==> 由上到下 ==> \
  {
    if (x - y === 0) {
      let win = true;
      for (let i = 0; i < this.size; i++) {
        if (pattern[i * this.size + i] !== color) {
          win = false;
        }
      }
      if (win) {
        return true;
      }
    }
  }
  // 由左到右 ==> 由下到上 ==> /
  {
    if (x + y === this.size - 1) {
      let win = true;
      for (let i = 0; i < this.size; i++) {
        if (pattern[i * (this.size - 1) + this.size - 1] !== color) {
          win = false;
        }
      }
      if (win) {
        return true;
      }
    }
  }

  return false;
};

Game.prototype.bestChoice = function (pattern, color) {
  if (this.size > 3) {
    return { point: null, result: 0 };
  }
  let p;
  if ((p = this.calculateWillWin(pattern, color))) {
    return {
      point: p,
      result: 1,
    };
  }
  let result = -2;
  let point = null;
  for (let y = 0; y < this.size; y++) {
    for (let x = 0; x < this.size; x++) {
      if (pattern[y * this.size + x]) {
        continue;
      }
      let tmp = clone(pattern);
      tmp[y * this.size + x] = color;
      let r = this.bestChoice(tmp, 3 - color).result;
      if (-r > result) {
        result = -r;
        point = [x, y];
      }
    }
  }
  return {
    point: point,
    result: point ? result : 0,
  };
};
