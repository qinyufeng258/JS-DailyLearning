window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);

	console.time("Time By bubbleSort");
    console.log("After Sorted:\n" + array.bubbleSort());  
    console.timeEnd("Time By bubbleSort");

};

Array.prototype.bubbleSort = function(){

	var arr = this;

	for(var i=0; i<arr.length; i++){
		for(var j=i;j<arr.length; j++){
			if(arr[j] < arr[i]){
				var tmp = arr[j];
				arr[j] = arr[i];
				arr[i] = tmp;
			}
		}
	}

	return arr;

};



