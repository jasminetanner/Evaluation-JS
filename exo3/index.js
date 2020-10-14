'use strict';


/** MatrixGenerator - generates a matrix and displays it on page
 *@param {int[int[]]}
 */
// function matrixGenerator(array){
//     var matrix = document.createElement("table");
//     for (var i=0;i<array.length;i++){
//         var tr = document.createElement("tr");
//         for(var j=0;j<array[i].length;j++){
//           var td = document.createElement("td");
//           td.insertAdjacentHTML("beforeend","<span>"+array[i][j]+"</span>");
//           tr.appendChild(td);
//         }
//         matrix.appendChild(tr);
//     }
//     document.querySelector("body").appendChild(matrix);
// }
// matrixGenerator(
// [[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]]
// );


/**
 * Animal
 * @constructor
 * @param {string} name
 */
// var gridGenerator = function gridGenerator(xAxis, yAxis) {
//   this.xAxis = xAxis;
//   this.yAxis = yAxis;
// };
// /**
//  * Run
//  */
// gridGenerator.prototype.run = function() {
//   console.log(this.table());
// }
// /**
//  * Cry
//  * @return {string} cry
//  */
// gridGenerator.prototype.table = function() {
//   return 'Miamou';
// }
// var cat = new gridGenerator('toto');

// cat.run();



var progressBar = function progressBar(max, val) {
  this.max = max;
  this.val = val;
};

progressBar.prototype.bar = function () {
  var progress = document.createElement("progress");
  progress.value = this.val;
  progress.max = this.max;
  progress.style.backgroundColor = "gray";
  document.body.appendChild(progress);
};

function progressAmount() {
  return Math.round(math.random() * (10 - 100) + 10);
};

var tab = new progressBar(100, 60); //to change the progress on progress bar
tab.bar();