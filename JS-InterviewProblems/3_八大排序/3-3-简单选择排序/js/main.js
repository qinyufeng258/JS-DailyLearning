window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);

	console.time("Time By selectSort");
    console.log("After Sorted:\n" + array.selectSort());  
    console.timeEnd("Time By selectSort");
	

};


Array.prototype.selectSort = function(){

	var arr = this;

	

	for(var i=0; i<arr.length-1; i++){
		var minIndex = i+1;
		for(var j=i+1;j<arr.length; j++){
			if(arr[j] < arr[minIndex]){
				minIndex = j;
			}
		}
		//find the min
		//exchange min and a[i]
		if(arr[minIndex] < arr[i]){
			var tmp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = tmp;
		}
		

	}
	

	return arr;

};