let x = 5;

try {
  x = y + 1;
} catch(err) {
  let text = err.name;
}

let anna = 5;
try {
  anna(5);
} catch(err) {
  let text = err.name;
}

try {
new Array(-1);
} catch(err) {
  let text = err.name;
}
