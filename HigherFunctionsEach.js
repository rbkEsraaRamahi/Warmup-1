// 1) 'negativeAll' create function that accept array as input and check the element
//     if it's positive make it negative
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}
function negativeAll(array) {
  var newArray = [];

  each(array, function(elem, i) {
    if (elem > 0) {
      newArray.push(-elem);
    } else {
      newArrey.push(elem);
    }
    return newArray;
  });
}

/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
function multiplyOfFour(array) {
  var newArray = [];
  each(array, function(elem, i) {
    if (i % 4 === 0) {
      newArray.push(elem * 4);
    }
    return newArray;
  });
}
