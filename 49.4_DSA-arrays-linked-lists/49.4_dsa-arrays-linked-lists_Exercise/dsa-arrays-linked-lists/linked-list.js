/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  _get(idx) {
    let cur = this.head;
    let count = 0;

    while (cur !== null && count != idx) {
      count += 1;
      cur = cur.next;
    }

    return cur;
  }
  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(this.head === null) this.head = newNode;
    if(this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //create the new Node.
    let newNode = new Node(val);
    //if there is nothing in the list to begin with, then start with this "if" statement.
    if(this.head === null){
      //because only Node in new list, this.head has to be pointed to.
      this.head = newNode
      //because only Node in new list, this.tail has to be pointed to.
      this.tail = newNode
    //If there is already items in the list, then follow these steps.
    }else{
      //take the current this.head (before anything changes, because newNode is created, but not put into the LinkedList yet.) so you are able to take the current head and point at it with the newNode that will be the pointing at the .next Node
      newNode.next = this.head;

      this.head = newNode;
    }
    this.length +=1;
    }


  /** pop(): return & remove last item. */

  pop() {
   return this.removeAt(this.length-1);
    
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length || idx < 0){
      throw new Error("Sorry this is not correct, please submit the correct ")
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0){
      throw new Error ("Not valid index")
    }
    let cur = this._get(idx);
    cur.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    // get the one before it
    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //if the index is out of the range
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    //if the index is at the beginning for removal.
    if(idx === 0){
      let val = this.head.val
      this.head = this.head.next;
      this.length -= 1;
      if(this.length< 2) this.tail = this.head;
      return val;
    }
    //if the index is in the middle somewhwer that is not the head or tail.
    //This code below is to retreive the index number before the Node being removed.
    let prev = this._get(idx -1);

    //if 
    if(idx === this.length -1){
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }
    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
