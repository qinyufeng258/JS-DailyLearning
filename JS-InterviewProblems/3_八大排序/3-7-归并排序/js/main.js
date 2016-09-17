window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);

	console.time("Time By quickSort");
	mergeSort(array,0,array.length-1);
    console.log("After Sorted:\n" + array);  
    console.timeEnd("Time By quickSort");

};

function mergeSort(a,l,r){

	if(l < r){
		var m = Math.floor((l + r)/2);
		mergeSort(a,l,m);
		mergeSort(a,m+1,r);
		mergeArray(a,l,m,r);
	}

};

function mergeArray(a,l,m,r){

	var i = l;
	var j = m+1;
	var n = r;
	var m = m;
	var tmp = [];
	var k = 0;

	while(i<=m && j<=n){
		if(a[j] <= a[i]){
			tmp[k++] = a[j++];
		}
		else{
			tmp[k++] = a[i++];
		}
	}

	while(i<=m){
		tmp[k++] = a[i++];
	}

	while(j<=n){
		tmp[k++] = a[j++];
	}

	for(var i=0;i<k;i++){
		a[l + i] = tmp[i]; 
	}

}



