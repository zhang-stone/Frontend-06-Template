function match(string) {
  for (let c of string) {
    if (c === 'a') {
      return true;
    }
  }
  return false;
}
// match('I an good')



function match2(string) {
  let foundA = false;
  for (let c of string) {
    debugger
    if (c === 'a') {
      foundA = true;
    } else if (foundA && c === 'b') {
      return true;
    } else {
      foundA = false
    }
  }
  return false;
}
// match2('I abn good')


// 在一个字符串中，找到字符“abcdef”

function match3(string) {
  let fountA = false;
  let fountB = false;
  let fountC = false;
  let fountD = false;
  for (let c of string) {
    if (c === 'a') {
      fountA = true
    } else if (fountA && c === 'b') {
      fountB = true
    } else if (fountB && c === 'c') {
      fountC = true
    }  else if (fountC && c === 'd') {
      fountD = true
    } else if (fountD && c === 'e') {
      return
    } else {
      fountA = false
      fountB = false
      fountC = false
      fountD = false
    }
  }

}

match3("I abcdabcden good")