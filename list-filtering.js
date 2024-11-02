// Cara saya
function filter_list(l) {
  let newArr = l.slice();
  return newArr.filter((item) => typeof item === "number");
}

// Cara lain
// function filter_list(l) {
//   return l.filter(function (v) {
//     return typeof v == "number";
//   });
// }
console.log(filter_list([1, 2, 3, "a", "b"]));
