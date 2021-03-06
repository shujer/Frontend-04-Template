let $ = Symbol("$");
class Trie {
  constructor() {
    this.root = Object.create(null);
  }
  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) {
        node[c] = Object.create(null);
      }
      node = node[c];
    }
    if (!node[$]) {
      node[$] = 0;
    }
    node[$]++;
  }

  most() {
    let max = 0;
    let maxWord = "";
    dfs(this.root, "");
    return maxWord;
    function dfs(node, word) {
      if (node[$] && node[$] > max) {
        max = node[$];
        maxWord = word;
      }
      for (let c in node) {
        dfs(node[c], word + c);
      }
    }
  }
}

function randomWorld(size) {
  let word = "";
  for (let i = 0; i < size; i++) {
    word += String.fromCharCode(Math.random() * 26 + "a".charCodeAt(0));
  }
  return word;
}
let trie = new Trie();
for (let i = 0; i < 10000; i++) {
  let word = randomWorld(4);
  trie.insert(word);
}
