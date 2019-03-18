  function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i],i);
        }
    }
	function negativeAll(array) {
	 //your code here
	 var negative = [];
	 	each(array, function(element, index){
	 		if(element >=0){
	 			negative.push(-element);
	 		} else {
	 		    negative.push(element);
	 		}
	 	})
	 	return negative;
	}

function multiplyOfFour(array) {
	    //your code here
	    var newArr = [];
	    each(array,function(element,index){
	        if(index % 4 === 0){
	            console.log(index);
                newArr.push(array[index] * 4);
	        }
	    })
	    return newArr;
	}
