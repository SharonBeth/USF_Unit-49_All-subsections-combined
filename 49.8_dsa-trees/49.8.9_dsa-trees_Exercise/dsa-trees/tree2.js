/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  find(val){
    let toVisitStack = [this];

    while(toVisitStack.length){
      let current = toVisitStack.pop();

      if(current.val === val)
        return current;
    }
  }
  each(){
    let eachValStack =[this];
    return eachValStack;

    }
  }

class Tree {
  constructor(root = null) {
   this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function sumHelper(node) {
      // go through all the children for a Node
      for (let child of node.children) {
        // accumulate all values
        total += child.val;
        // if it has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

// let country = new TreeNode(1, [])
// let town1 = new TreeNode(2, [])
// let town2 = new TreeNode(3, [])
let country = new TreeNode(1, [
  new TreeNode(2,[new TreeNode(5, [])] ),
  new TreeNode(3, []),
  new TreeNode(4, [] )
])
 
// module.exports = { Tree, TreeNode };
