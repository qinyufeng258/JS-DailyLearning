window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);

	console.time("Time By insertSort");
    console.log("After Sorted:\n" + array.insertSort());  
    console.timeEnd("Time By insertSort");

	console.time("Time By insertSort2");
    console.log("After Sorted2:\n" + array.insertSort2());  
    console.timeEnd("Time By insertSort2");
	

};

Array.prototype.insertSort = function(){

	var arr = this;

	for(var i = 1; i < arr.length; i++){
		for(var j = i-1; j >= 0; j--){
			if(arr[j] <= arr[i]){
				break;	
			}
		}

		if(j == i-1) continue;
		
		var tmp = arr[i];

		for(var k = i-1 ; k > j; k--){
			arr[k+1] = arr[k];
		}

		arr[k+1] = tmp;

	}

	return arr;

};

Array.prototype.insertSort2 = function(){

	var arr = this;

	for(var i = 1; i < arr.length; i++){
		if(arr[i] < arr[i-1]){
			var tmp = arr[i];

			for(var j = i-1; j>0 && arr[j] > tmp; j--){
				arr[j+1] = arr[j];
			}

			arr[j+1] = tmp;
		}

	}

	return arr;

};