	window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);
	var arr = array.slice(0);
	console.time("Time By insertSort");
    console.log("After Sorted:\n" + insertSort(arr));  
    console.timeEnd("Time By insertSort");
    var arr = array.slice(0);
    console.time("Time By shellSort");
    console.log("After Sorted:\n" + shellSort(arr));  
    console.timeEnd("Time By shellSort");
   	var arr = array.slice(0);
    console.time("Time By selectSort");
    console.log("After Sorted:\n" + selectSort(arr));  
    console.timeEnd("Time By selectSort");
    var arr = array.slice(0);
    console.time("Time By heapSort");
    console.log("After Sorted:\n" + heapSort(arr));  
    console.timeEnd("Time By heapSort");
    var arr = array.slice(0);
    console.time("Time By bubbleSort");
    console.log("After Sorted:\n" + bubbleSort(arr));  
    console.timeEnd("Time By bubbleSort");
    var arr = array.slice(0);
    console.time("Time By quickSort");
    console.log("After Sorted:\n" + quickSort(arr, 0, arr.length-1));  
    console.timeEnd("Time By quickSort");
    var arr = array.slice(0);
    console.time("Time By mergeSort");
    console.log("After Sorted:\n" + mergeSort(arr, 0, arr.length-1));  
    console.timeEnd("Time By mergeSort");
    var arr = array.slice(0);
    console.time("Time By radixSort");
    console.log("After Sorted:\n" + radixSort(arr));  
    console.timeEnd("Time By radixSort");

};

function insertSort(array){

	var a = array;

	for(var i=1; i<a.length; i++){
		if(a[i] < a[i-1]){
			var tmp = a[i];

			for(var j=i-1; j>=0 && a[j]>tmp; j--){
				a[j+1] = a[j];
			}

			a[j+1] = tmp;

		}
	}

	return a;

}

function shellSort(a){

	var a = a;

	var gap = Math.floor(a.length / 2);

	while(gap>=1){
		for(var i=gap; i<a.length; i++){
			if(a[i] < a[i-gap]){
				var tmp = a[i];

				for(var j=i-gap; j>=0 && a[j]>tmp; j--){
					a[j+gap] = a[j];
				}

				a[j+gap] = tmp;

			}
		}
		gap = Math.floor(gap / 2);
	}
	

	return a;

}

function selectSort(a){

	var a=a;

	for(var i=0; i<a.length-1; i++){
		var minIndex = i;
		for(var j=i+1; j<a.length; j++){
			if(a[j] < a[minIndex]){
				minIndex = j;
			}
		}

		if(minIndex!=i){
			var tmp = a[minIndex];
			a[minIndex] = a[i];
			a[i] = tmp;
		}
	}

	return a;

}

function heapAdjust(a,i,s){

	var a = a;
	var l = 2*i+1;
	var r = 2*i+2;
	var max = i;

	if(i <= Math.floor(s/2)){
		if(l <= s && a[l] > a[max]){
			max = l;
		}
		if(r <= s && a[r] > a[max]){
			max = r;
		}

		if(max != i){
			var tmp = a[max];
			a[max] = a[i];
			a[i] = tmp;
			
			a = heapAdjust(a,max,s);
		}
	}

	return a;

}

function heapBuild(a){

	var s = a.length;

	for(var i=Math.floor(s/2); i>=0; i--){
		a = heapAdjust(a,i,s);
	}

	return a;

}

function heapSort(a){

	var a = a;
	var s = a.length;

	a = heapBuild(a);

	for(var i=s-1; i>=1; i--){
		var tmp = a[i];
		a[i] = a[0];
		a[0] = tmp;
		a = heapAdjust(a,0,i-1);
	}

	return a;

}

function bubbleSort(a){

	var a = a;

	for(var i=0; i<a.length; i++){
		for(var j=i; j<a.length; j++){
			if(a[j] < a[i]){
				var tmp = a[i];
				a[i] = a[j];
				a[j] = tmp;
			}
		}
	}

	return a;

}

function quickSort(a,l,r){

	var a = a;
	if(l<r){
		var i = l;
		var j = r;
		var x = a[i];
		
		while(i<j){
			while(i<j && a[j]>x){
				j--;
			}
			if(i<j){
				a[i++] = a[j];
			}
			while(i<j && a[i]<x){
				i++;
			}
			if(i<j){
				a[j--] = a[i];
			}
		}

		a[i] = x;

		a = quickSort(a,l,i-1);
		a = quickSort(a,i+1,r);



	}

	return a;

}

function mergeSort(a,l,r){

	var a = a;
	if(l<r){

		var m = Math.floor((l+r) / 2);
		a = mergeSort(a,l,m);
		a = mergeSort(a,m+1,r);
		a = mergeAdjust(a,l,m,r);

	}

	return a;

}

function mergeAdjust(a,l,m,r){

	var a = a;
	var i = l;
	var j = m+1;
	var m = m;
	var n = r;
	var k = 0;
	var tmp = [];
	while(i<=m && j<=n){
		if(a[i] <= a[j]){
			tmp[k++] = a[i++];
		}
		else{
			tmp[k++] = a[j++];
		}
	}

	while(i<=m){
		tmp[k++] = a[i++];
	}

	while(j<=n){
		tmp[k++] = a[j++];
	}

	for(var i=0; i<tmp.length; i++){
		a[l + i] = tmp[i];
	}

	return a;
}

function radixSort(a){

	var a = a;
	for(var radix=1; radix<11; radix++){

		var bucket = new Array();

		for(var m=0; m<10; m++){
			bucket[m] = new Array();
		}

		for(var m=0; m<10; m++){
			for(var n=0; n<20; n++){
				bucket[m][n] = -1;
			}
		}

		//INIT END

		for(var k=0; k<a.length; k++){
			var tmp = Math.floor(a[k] / Math.pow(10,radix-1)) % 10;
			for(var index=0; index<20; index++){
				if(bucket[tmp][index] == -1){
					bucket[tmp][index] = a[k];
					break;
				}
				
			}
		}

		for(var m=0,k=0; m<10; m++){
			for(var n=0; n<20; n++){
				if(bucket[m][n] !=-1){
					a[k++] = bucket[m][n];
				}
			}
		}


	}

	return a;

}



