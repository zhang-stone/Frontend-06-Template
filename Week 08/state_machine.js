
function match(string) {
  let state = start;
  for (let c of string) {
    state = state(c)
  }
  return state === end;
}

function start(str) {
  if (str === 'a') {
    return fountB;
  } else {
    return start;
  }
}
function fountB(str) {
  if (str === 'b') {
    return fountC;
  } else {
    return start(str);
  }
}

function fountC(str) {
  if (str === 'c') {
    return end;
  } else {
    return start(str);
  }
}

function end(str) {
  return end;
}


let a = match("1 ababcde")
console.log(a)



// abc abx


function match2(string) {
  let state = start;
  for (let c of string) {
    state = state(c)
  }
  return state === end;
}
