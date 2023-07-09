const LinkedList = require('./LinkedList')
const ll = new LinkedList();

ll.insertAtHead(10);
ll.insertAtHead(20);
console.log(ll.getByIndex(0));
ll.print()
