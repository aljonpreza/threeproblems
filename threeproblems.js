/**
 * Created by aljonp on 9/21/15.
 */
var testNums = [1, 2, 3, 4];

function sumFor(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function sumWhile(array) {
  var total = 0;
  var i = 0;
  while (i < array.length) {
    total += array[i].length;
    i++;
  }
}

function sumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  else {
    return array[0] + sumRecursion(array.slice(1, array.length));
  }
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function(memo, num) { return memo + num;}, 0);
}

console.log("sumFor: " + sumFor(testNums));
console.log("sumWhile: " + sumFor(testNums));
console.log("sumRecursion: " + sumRecursion(testNums));
console.log("sumTheSimpleWay: " + sumTheSimpleWay(testNums));


var testList1 = [1, 2, 3];
var testList2 = ["a", "b", "c"];

function zipList(array1, array2) {
  var array3 = [];
  for (var i = 0; i < array1.length; i++) {
    array3.push(array1[i], array2[i]);
  }
  return array3;
}

function zipListTheSimpleWay(array1, array2) {
  return _.zip(array1, array2)
}

console.log("zipList: " + zipList(testList1, testList2));
console.log("zipListTheSimpleWay: " + zipListTheSimpleWay(testList1, testList2));

function fib() {
  var tail = 0;
  var head = 1;
  var fibList = [tail];
  for (var i = 0; i < 99; i++) {
    var tempHead = head;
    head = head + tail;
    tail = tempHead;
    fibList.push(head);
  }

  return fibList;
}

console.log("fib: " + fib());