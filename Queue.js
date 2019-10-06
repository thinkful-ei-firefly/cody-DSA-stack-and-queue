class _Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }
  enqueue(data) {
    const node = new _Node(data)

    if (this.first === null) {
      this.first = node
    }

    if (this.last) {
      this.last.next = node
    }
    //make the new node the last item on the queue
    this.last = node
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return
    }
    const node = this.first
    this.first = this.first.next
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null
    }
    return node.value
  }
}

const starTrekQ = new Queue()
starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Urhulu')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

function peek(q){
  return q.first
}

// console.log(peek(starTrekQ))

function isEmpty(q){
  return !q.first
}

// console.log(isEmpty(starTrekQ))

function display(q){
  currQ = q.first
  while(currQ.next !== null){
    console.log(currQ.next)
    currQ = currQ.next
  }
}

starTrekQ.dequeue('Spock')

display(starTrekQ)


