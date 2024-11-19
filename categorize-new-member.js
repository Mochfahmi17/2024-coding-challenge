function openOrSenior(data) {
  const membership = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      membership.push("Senior");
    } else {
      membership.push("Open");
    }
  }
  return membership;
}

// cara lain
// const openOrSenior = (data) => {
//   return data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? "Senior" : "Open"));
// };

console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
);
