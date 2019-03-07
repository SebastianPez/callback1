// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(arr[i], i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(arr, index) {
//   console.log("Found " + arr + " at index " + index + "!");
  // console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

var names = ["Alice", "Bob", "Waldo", "Winston"];

var actionWhenFound = function(name, i) {
  if (name === "Waldo"){
  console.log("Found " + name + " at index " + i + "!");
  }
};

names.forEach(actionWhenFound);