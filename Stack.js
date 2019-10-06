class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(data) {
    // if its the first item, new node is new top and it links to nothing
    if (this.top === null) {
      this.top = new _Node(data, null)
    }
    // new nodes next is set to the current top and top is set to the new node
    this.top = new _Node(data, this.top)
  }

  pop() {
    // the top node gets set to the next node
    const popdStack = this.top
    this.top = this.top.next
    return popdStack
  }
}

const startTrek = new Stack()
startTrek.push('Kirk')
startTrek.push('Spock')
startTrek.push('McCody')
startTrek.push('Scotty')

// show top node in stack
function peek(stack) {
  return stack.top
}

// console.log(peek(startTrek))

function isEmpty(stack) {
  return !stack.top
}

// console.log(isEmpty(startTrek))
function display(stack) {
  let currStack = stack.top
  while (currStack.next != null) {
    console.log(currStack)
    currStack = currStack.next
  }
}

// display(startTrek)

module.exports = {
  Stack,
  display
}
