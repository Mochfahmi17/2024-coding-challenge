//* Metode Math.min() :
function findSmallestInt(arr) {
  //! Note : Gunakan math.min() untuk mencari nilai terendah dalam array.
  const result = Math.min(...arr);
  return result;
}
console.log(findSmallestInt([78, 56, 232, 12, 0]));
