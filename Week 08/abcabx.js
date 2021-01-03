

// abc abx
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
    return fountA2;
  } else {
    return start(str);
  }
}

function fountA2(str) {
  if (str === 'a') {
    return fountB2;
  } else {
    return start(str);
  }
}
function fountB2(str) {
  if (str === 'b') {
    return fountC2;
  } else {
    return start(str);
  }
}

function fountC2(str) {
  if (str === 'x') {
    return end;
  } else {
    return fountC(str);
  }
}


function end(str) {
  return end;
}


let a = match("1 ababcabcabc")
console.log(a)

