function createLinkedList() {
  //add a new node to the end
  const append = (value) => {
    if (!head && !tail) {
      tail = createNode();
      tail.value = value;
      head = tail;
    } else {
      temp = tail;
      tail = createNode();
      tail.value = value;
      temp.next = tail;
    }
  };
  //add a new node to the start
  const prepend = (value) => {
    if (!head) {
      head = createNode();
      head.value = value;
      tail = head;
    } else {
      temp = head;
      head = createNode();
      head.value = value;
      head.next = temp;
    }
  };
  //return total number of nodes
  const size = () => {
    if (!head) return 0;
    let count = 1;
    let currentNode = head;
    while (currentNode !== tail) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  };
  //return the first node
  let head;
  const getHead = () => {
    return head;
  };
  //return the last node
  let tail;
  const getTail = () => {
    return tail;
  };
  //return the node at a given index
  const at = (index) => {
    if (!head) return "List is empty";
    let currentNode = head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  //insert a new node with provided value at given index
  const insertAt = (value, index) => {
    let currentNode = head;
    for (let i = 2; i < index; i++) {
      currentNode = currentNode.next;
    }
    let temp = currentNode.next;
    currentNode.next = createNode();
    currentNode.next.value = value;
    currentNode.next.next = temp;
  };
  //remove a node at a given index
  const removeAt = (index) => {};
  //remove last node from the list
  const pop = () => {};
  //return true if if the passed value is in the list
  const contains = (value) => {};
  //return the index of the node containing value
  const find = (value) => {};
  //show linked list objects as strings
  const toString = () => {};

  return { append, prepend, size, getHead, getTail, at, insertAt };
}

function createNode() {
  const value = null;
  const next = null;

  return { value, next };
}
