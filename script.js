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
  const at = () => {};
  //insert a new node with provided value at given index
  const insertAt = (value, index) => {};
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

  return { append, prepend, size, getHead, getTail };
}

function createNode() {
  const value = null;
  const next = null;

  return { value, next };
}
