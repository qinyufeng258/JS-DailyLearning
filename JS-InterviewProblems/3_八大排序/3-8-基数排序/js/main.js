window.onload = function(){

	var array = [];

	for(var i = 0; i < 20; i++){
		array[i] = Math.floor(Math.random()*100); 
	}
	console.log("Before Sorted:\n" + array);

	console.time("Time By radixSort");
	radixSort(array);
    console.log("After Sorted:\n" + array);  
    console.timeEnd("Time By radixSort");

};

function radixSort(a){

	for(var i=1; i<11; i++){
		//位数，从1~31位开始，安排该位数上的数值大小放入桶中
		var bucket = new Array();//木桶，二维数组，每次使用前清空,二维存放位数相同，数值不同的数
		//由于JS二维数组的问题，需要先创建二维数组，然后再初始化二维数组
		for(var buck_a = 0; buck_a < 10; buck_a++)
		{
		   for(var buck_b = 0; buck_b < 100; buck_b++)
		      bucket[buck_a] = new Array();
		} 

		for(var buck_a = 0; buck_a < 10; buck_a++)
		{
		   for(var buck_b = 0; buck_b < 100; buck_b++)
		      bucket[buck_a][buck_b] = -1;
		} 

		for(var j=0; j<a.length; j++){
			var tmp = getDigit(a[j],i);//获取该数字的第i位的数值
			for(var index =0; index<100; index++){
				//从0开始，若此处已有数据，则放入下一个下标处
				if(bucket[tmp][index] == -1){
					bucket[tmp][index] = a[j];
					break;
				}
			}
		}

		for(var m=0,k=0; m<10; m++){
			for(var n=0; n<100; n++){
				if(bucket[m][n] == -1) continue;
				a[k++] = bucket[m][n];
			}
		}

	}

}

function getDigit(x,d){

	return Math.floor(x / Math.pow(10,d-1)) % 10;

}


