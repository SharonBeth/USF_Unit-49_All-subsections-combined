console.log("Testing that 49.9.9 homeowork came through")
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //Think of this as a variable, and this.root is a part of the variable.
    if(this.root===null){
      this.root = new Node(val);
      return this; 
    }
    
    let current = this.root;

    while(current){
      console.log("testing")
      if(current.val > val){
        console.log("current> val")
        if(current.left === null){
          current.left = new Node(val);
          return this;
        }else{
          current = current.left;
        }
      }else if(current.val < val){
        console.log("current< val")
        if(current.right === null){
          current.right = new Node(val);
          console.log("right side added")
          return this;
        }else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current=this.root) {
    if(this.root=== null){
      this.root = new Node(val);
      return this;
    }

    if(current.val > val){
      if(current.left === null){
        current.left = new Node(val);
        return this;
      }return this.insertRecursively(val, current.left)
    }else {
      if(current.right === null){
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let found = false;

    if(val === current.val) return current;

    while(current && !found){
      if(current.val > val){
        current = current.left;
      }else if(current.val < val){
        current = current.right;
      }else(
        found = true
      )
    }
    if(!found) return undefined;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return undefined;

    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    let array = [];
    let current = this.root;

    function traverse(node){
      array.push(node.val);
      //This is kind of a if statement, if left is true, then do traverse.
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(current)
    return array;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    let array = [];
    let current = this.root;

    function traverse(node){
      node.left && traverse(node.left);
      array.push(node.val)
      node.right && traverse(node.right);
    }
    traverse(current)
    return array;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    let array = [];
    let current = this.root;

    function traverse(node){
      node.left && traverse(node.left);

      node.right && traverse(node.right);
      array.push(node.val)
    }
    traverse(current.left)
    traverse(current.right)
    array.push(this.root.val)
    return array;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insertRecursively(15)
binarySearchTree.insertRecursively(20)
binarySearchTree.insertRecursively(10)
binarySearchTree.insertRecursively(12);
binarySearchTree.insert(1)
binarySearchTree.insert(5)
binarySearchTree.insert(50);
let foundNode = binarySearchTree.findRecursively(20);