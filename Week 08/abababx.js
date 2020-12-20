// ab ab abx

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
    return fountA3;
  } else {
    return start(str);
  }
}

function fountA3(str) {
  if (str === 'a') {
    return fountB3;
  } else {
    return start(str);
  }
}
function fountB3(str) {
  if (str === 'b') {
    return fountX;
  } else {
    return start(str);
  }
}

function fountX(str) {
  if (str === 'x') {
    return end;
  } else {
    return fountA3(str);
  }
}



function end(str) {
  return end;
}


let a = match("1 abababdbaabxababx")
console.log(a)
