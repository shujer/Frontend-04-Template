function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function onWillWinCallback(role) {
  console.log(role + " will win");
}

function onWinCallback(role) {
  alert(role + " is the winner");
}

function createPattern(size) {
  return new Array(size).fill(0).map((_) => new Array(size).fill(0));
}

function Game({
  root,
  size = 3,
  color = 1,
  onWillWin = onWillWinCallback,
  onWin = onWinCallback,
}) {
  this.board = document.getElementById(root);
  const pattern = createPattern(size);
  this.settings = { pattern: clone(pattern), color };
  this.pattern = pattern;
  this.size = size;
  this.color = color;
  this.onWillWin = onWillWin;
  this.onWin = onWin;
  this.show();
  this.start();
}

/**
 * @description 根据颜色获取当前执子的对象
 * @param {Number} color
 */
Game.prototype.getRole = function (color) {
  return color === 2 ? "⭕" : color === 1 ? "❌" : "";
};

/**
 * @description 每次落子后重新绘制
 */
Game.prototype.show = function () {
  // 使用文档片段缓存，减少页面重绘
  const newCells = document.createDocumentFragment();
  this.pattern.forEach((col, y) => {
    col.forEach((_, x) => {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.classList.add(this.pattern[y][x] === 0 ? "enable" : "disable");
      cell.style.height = `calc(${100 / this.size}% + 1px)`;
      cell.style.width = `calc(${100 / this.size}% + 1px)`;
      cell.dataset.x = x;
      cell.dataset.y = y;
      cell.innerText = this.getRole(this.pattern[y][x]);
      // cell.addEventListener("click", () => this.move(x, y));
      newCells.appendChild(cell);
    });
  });
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
      this.move(parseInt(x), parseInt(y));
    }
  };
  this.board.addEventListener("click", this.boardListener);
};

/**
 * @description 停止游戏，双方不能再落子
 */
Game.prototype.stop = function () {
  this.board.removeEventListener("click", this.boardListener);
};

Game.prototype.restart = function () {
  const pattern = createPattern(this.size);
  this.settings.pattern = pattern;
  this.color = this.settings.color;
  this.pattern = pattern;
  this.show();
  this.start();
};

Game.prototype.resize = function (size) {
  const pattern = createPattern(size);
  this.settings.pattern = pattern;
  this.color = this.settings.color;
  this.pattern = pattern;
  this.size = size;
  this.show();
  this.start();
};

/**
 * @description 落子
 * @param {Number} x
 * @param {Number} y
 */
Game.prototype.move = function (x, y) {
  this.pattern[y][x] = this.color;
  this.show();
  let color = this.color;
  let role = this.getRole(color);
  if (this.check(this.pattern, x, y)) {
    this.stop();
    this.onWin(role);
  } else {
    color = 3 - color;
    role = this.getRole(color);
    if (this.willWin(this.pattern, color)) {
      this.onWillWin(role);
    }
  }
  this.color = 3 - this.color;
};

/**
 * @description 扫描棋盘中空白的位置，利用 tempColor 模拟前进一步再做恢复 （不重复复制对象）
 * @param {Array<Array<Number>>} _pattern
 * @param {Number} color
 */
Game.prototype.willWin = function (_pattern, color) {
  let willWin = false;
  let pattern = clone(_pattern);
  let tempColor;
  // 更习惯使用声明函数：some 满足条件则跳出循环，简洁
  pattern.some((col, y) => {
    col.some((_, x) => {
      if (!pattern[y][x]) {
        tempColor = pattern[y][x];
        pattern[y][x] = color;
        willWin = this.check(pattern, x, y);
        pattern[y][x] = tempColor;
      }
      return willWin;
    });
    return willWin;
  });
  return willWin;
};

/**
 * @description 剪枝：每次只检查当前这一步是否满足条件，不做全局扫描
 * @param {Array<Array<Number>>} pattern
 * @param {Number} x
 * @param {Number} y
 */
Game.prototype.check = function (pattern, x, y) {
  // 检查行
  const checkRow = pattern[y].every((_, i) => pattern[y][i] === pattern[y][x]);
  if (checkRow) {
    return true;
  }
  // 检查列
  const checkCol = pattern[y].every((_, i) => pattern[i][x] === pattern[y][x]);
  if (checkCol) {
    return true;
  }
  // 由左到右 ==> 由下到上 ==> /
  if (x + y === this.size - 1) {
    const checkLTT = pattern[y].every(
      (_, i) => pattern[this.size - 1 - i][i] === pattern[y][x]
    );
    if (checkLTT) {
      return true;
    }
  }
  // 由左到右 ==> 由上到下 ==> \
  if (x - y === 0) {
    const checkTTL = pattern[y].every(
      (_, i) => pattern[i][i] === pattern[y][x]
    );
    if (checkTTL) {
      return true;
    }
  }
  return false;
};
