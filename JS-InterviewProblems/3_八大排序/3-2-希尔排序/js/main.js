window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);

	console.time("Time By shellSort");
    console.log("After Sorted:\n" + array.shellSort());  
    console.timeEnd("Time By shellSort");
	

};


Array.prototype.shellSort = function(){

	var arr = this;

	var gap = Math.floor(arr.length/2);

	while(gap >= 1){
		for(var i = gap; i < arr.length; i++){
			if(arr[i] <= arr[i-gap]){
				var tmp = arr[i];

				for(var j = i-gap; j>=0 && arr[j] > tmp; j=j-gap){
					arr[j+gap] = arr[j];
				}

				arr[j+gap] = tmp;
			}

		}
		gap =  Math.floor(gap/2);
	}
	

	return arr;

};