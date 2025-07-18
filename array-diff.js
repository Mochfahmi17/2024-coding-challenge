function arrayDiff(a, b) {
  return a.filter((elementA) => !b.includes(elementA));
}

console.log(arrayDiff([1, 2, 2, 3, 2, 4], [2]));
