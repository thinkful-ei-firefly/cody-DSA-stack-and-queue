const Stack = require('./Stack')

function is_palindrome(str) {
  const stack = new Stack()

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
  }

  // display(stack)

  // really only need to go through half b/c palindrome
  for (let i = 0; i < str.length; i++) {
    if (stack.pop().data !== str[i]) {
      return false
    }
  }

  return true
}

console.log(is_palindrome('boob'))
