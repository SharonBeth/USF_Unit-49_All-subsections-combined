/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthHelper(node.right) + 1;
      if (node.right === null) return minDepthHelper(node.left) + 1;
      return (
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
      );
    }

    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDepthHelper(node){
      if(node.left === null && node.right === null) return 1;
      if(node.left === null) return minDepthHelper(node.right) +1;
      if(node.right === null) return minDepthHelper(node.left) +1;
      return(
        Math.max(minDepthHelper(node.left), midDepthHelper(node.right))+1 
      );
    }
    return minDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if(!this.root) return 0;
    console.log(this.root.val)
    let count =0;

    function maxSumHelper(node, count){
      if(node.left=== null && node.right === null) return ;
      if(node.left < node.right || node.left === null){
        count = count + node.right
        console.log("right", count)
        maxSumHelper(node.right, count)
      }
      if(node.left > node.right || node.right === null){
        count = count + node.left;
        console.log("left", count)
        maxSumHelper(node.left, count)
      }
    }
    maxSumHelper(this.root, count)
    return count;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}


let firstBT = new BinaryTreeNode(1, 2, new BinaryTreeNode (5, 3,8 ))
let node = new BinaryTreeNode(1)
let nodeTree = new BinaryTree (node)
let firstTree = new BinaryTree (firstBT)