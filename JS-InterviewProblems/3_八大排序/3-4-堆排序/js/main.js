window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);

	console.time("Time By heapSort");
    console.log("After Sorted:\n" + heapSort(array,array.length));  
    console.timeEnd("Time By heapSort");

};

function heapAdjust(arr,i,size){

	var lchild = 2*i+1; //获取i的左子节点
	var rchild = 2*i+2; //获取i的右子节点
	var max = i;

	if(i<=size/2){ //如果i是叶节点，就不需要调整了，否则与孩子节点比较大小并交换
		if(lchild <= size && arr[lchild]>arr[max]){
			max = lchild;
		}
		if(rchild <= size && arr[rchild]>arr[max]){
			max = rchild;
		}
		if(max!=i){
			var tmp = arr[max];
			arr[max] = arr[i];
			arr[i] = tmp;
			heapAdjust(arr,max,size);
		}
	}
	//console.log(arr[i]);

}

function heapBuild(arr,size){

	//从非子节点开始调用调整堆的程序
	for(var i=size/2; i>=0; i--){
		heapAdjust(arr,i,size);
	}

}

function heapSort(arr,size){

	heapBuild(arr,size);

	//堆排序思想：将最后一个与堆顶节点交换，然后size-1，然后调用调整堆的程序。
	for(var i=size-1; i>=1; i--){

		var tmp = arr[0];
		arr[0] = arr[i];
		arr[i] = tmp;

		heapAdjust(arr,0,i-1);

	}

	return arr;
}



