	// 1) 'negativeAll' create function that accept array as input and check the element 
    //     if it's positive make it negative 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function negativeAll(array) {
	 // declare empty array to hold the result;
	 var resultArr = [];
	 each(array,function(element){
	 	// check the number inside the array greter than 0 (positive)
	 	if (element > 0) { 
	 		// if the number positive multiply it by -1 to be negative and added to the result array
	 		resultArr.push(element * (-1));
	 	} else {
	 		// if the number negative added to the result array 
			resultArr.push(element)
		}
	 })
	 // return reult array
	 return resultArr;
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
	    //array for the result
	    var resultArr = [];
	    each(array,function(element,index){
	    	// check if the index of multiply of 4 
	    	if (index % 4 === 0) { 
	    		// add the elment multiply by 4
	    		resultArr.push(element * 4);
	    	}
	    })
	    // return the result
	    return resultArr;
	}
