function Node(value, next = null) {
  return {
    value,
    next
  };
}

function reverse(head) {
  let prev = null,
    curr = head,
    next = curr.next;

  while (next) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr.next;
  }

  curr.next = prev;

  return curr;
}

let c = new Node("c");
let b = new Node("b", c);
let a = new Node("a", b);

console.log(reverse(a));
