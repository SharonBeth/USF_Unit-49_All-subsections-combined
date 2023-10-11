/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
  find(val){
    //still not sure I understand [this] and what it means
    let toVisitStack = [this];
    console.log(this)
    //While the length of [this] exists, continue the code below:
    while(toVisitStack.length){
      //This takes an item off the stack of [this] 
      let current = toVisitStack.pop();
      console.log(current)
      if(current.val === val)
        return current;
    
      for(let child of current.children){
        //This continues to search deeper into the tree and this adds to the [this] stack.
        toVisitStack.push(child)
      }
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
    if (!this.root) return 0;

    let evens = 0;

    function even(node) {
      console.log(node)
      for(let child of node.children){
        if(child.val%2==0){
          evens += 1;
          console.log(child.val + " " + evens)
        }else{
          console.log("odd")
        }
        if(child.children.length>0){
          even(child);
        }
      }
    }
    even(this.root);
    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    //this is checking that the Node Tree is empty, and if it is, it returns 0;
    if(!this.root) return 0;

    //This starts the variable count.
    let count = 0;

    //thsi function is looping through each child of the tree.
    function checking(node){
      for(let child of node.children){
        // console.log(child.val)
        //Here at each node of hte tree, it is checking for the official check. If the lowerBound value that is inputted as the argument the function 
        if(lowerBound < child.val){
          count += 1;
        }
        if(child.children.length>0){
          checking(child);
        }
      }
    }
    console.log("berfore" , this.root)
    checking(this.root);
    console.log("after", this.root)
    return count;
  }
}

let country = new TreeNode(1, [
  new TreeNode(2,[new TreeNode(5, [])] ),
  new TreeNode(3, [new TreeNode(30, [])]),
  new TreeNode(4, [new TreeNode(10, [])] )
])

let test = new Tree(country)

// Tree looks like
//           1
//       2   3  4
//       5

// module.exports = { Tree, TreeNode };


//Questions to ask Mentor: 

//Lines  111-117, I was able to set up the Node and the "Tree?" to the point of being able to 