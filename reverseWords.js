function reverseWords (str) {
  const parentheses = str.split('').filter(char => char === '(' || char === ')');
  const isValidParens = validParentheses(parentheses);

  if(!isValidParens) {
    return `${str} is invalid parentheses format`;
  } 

  const result = removeParensAndReverse(str)

  if(!result.includes('(') && !result.includes(')') ) {
    return result.join('');
  }

}

function removeParensAndReverse(str) {
  const strArr = str.split('');
  while(strArr.includes('(')) {
    const start = strArr.lastIndexOf('(')
    const stop = strArr.indexOf(')', start);
    const reversedWords = strArr.filter((char, i) => i > start && i < stop).reverse();
    strArr.splice(start+1, reversedWords.length, ...reversedWords);
    strArr.splice(start, 1);
    strArr.splice(stop-1, 1);
  }

  return strArr;

}

function validParentheses(parentheses) {
  while (parentheses.join('').includes('()')) {
    for (let i=0; i < parentheses.length - 1; i++) {
      if (parentheses[i].concat(parentheses[i + 1]) === '()') {
        parentheses.splice(i, 2)
      }
    }
  }
  if(parentheses.length === 0) {
    return true;
  }
  return false;

}

console.log('foo(bar) => ', reverseWords('foo(bar)'));
console.log('(bar) => ', reverseWords('(bar)'))
console.log('foo(bar)blim => ', reverseWords('foo(bar)blim'));
console.log('foo(foo(bar))blim => ', reverseWords('foo(foo(bar))blim'));
console.log('foo)(oop) => ', reverseWords('foo)(oop)'));