const { Stack, display } = require('./Stack')

function isEmpty(stack) {
  return stack.top === null
}

function parenthesisCheck(string) {
  //iterate through the given string
  //push "(" parenthesis (only parenthesis) to the stack when found
  //pop the stack when ")" is found
  //if at the end of the string, the stack still has something on it, we have unclosed parenthesis
  //while iterating, if we try to pop an empty stack, we're missing open parenthesis
  if (!string.length) return null
  const parenStack = new Stack()
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      parenStack.push(string[i])
    }
    if (string[i] === ')') {
      if (isEmpty(parenStack)) {
        console.log('you are missing a "("')
        return false
      }
      parenStack.pop()
    }
    if (string[i] === ']') {
      if (isEmpty(parenStack)) {
        console.log('you are missing a "["')
        return false
      }
      parenStack.pop()
    }
    if (string[i] === '}') {
      if (isEmpty(parenStack)) {
        console.log('you are missing a "{"')
        return false
      }
      parenStack.pop()
    }
  }
  if (!isEmpty(parenStack)) {
    console.log('you are missing a ")"')
    return false
  }
  if (!isEmpty(parenStack)) {
    console.log('you are missing a "]"')
    return false
  }
  if (!isEmpty(parenStack)) {
    console.log('you are missing a "}"')
    return false
  }
  return true
}
console.log(parenthesisCheck('This is a test [(dont tell anyone!)]'))
console.log(parenthesisCheck('This is a test [(dont tell anyone!)]'))
console.log(parenthesisCheck('This is a test {((dont tell anyone!)}'))
parenthesisCheck('(x+y)+[x+{]dd=}')
// matchParens('(x+y)+[x+{]dd=}')
