function reverseArray(n, inputArr) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(inputArr[n - 1 - i]);
  }
  console.log(arr.join(" "));
}
reverseArray(3, [10, 20, 30, 40, 50]);
