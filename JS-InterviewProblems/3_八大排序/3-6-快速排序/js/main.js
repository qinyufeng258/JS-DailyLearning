window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);

	console.time("Time By quickSort");
	quickSort(array,0,array.length-1);
    console.log("After Sorted:\n" + array);  
    console.timeEnd("Time By quickSort");

};

function quickSort(a,l,r){

	if(l < r){
		var i = l;
		var j = r;
		var x = a[l];

		while(i<j){
			while(i<j && a[j] > x){
				j--;
			}
			if(i<j){
				a[i++] = a[j];
				
			}
			while(i<j && a[i] < x){
				i++;
			}
			if(i<j){
				a[j--] = a[i];
				
			}
		}
		a[i] = x;
		quickSort(a,l,i-1);
		quickSort(a,i+1,r);

	}

	
	
};



