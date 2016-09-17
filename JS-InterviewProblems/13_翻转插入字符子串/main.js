
// 现在有一个字符串，你要对这个字符串进行 n 次操作，
// 每次操作给出两个数字：(p, l) 表示当前字符串中从下标为 p 的字符开始的长度为 l 的一个子串。
// 你要将这个子串左右翻转后插在这个子串原来位置的正后方，求最后得到的字符串是什么。字符串的下标是从 0 开始的，
// 你可以从样例中得到更多信息。

// ab
// 2
// 0 2
// 1 3

// abbaabb

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";
var output = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    var nLine = 0;
    
    while(nLine < input_array.length){
        var line = input_array[nLine++].trim();
        if(line === ''){
            continue;
        }
        var s = line;
        var n = +input_array[nLine++];
        while(n--){
            var input_arrays = input_array[nLine++].trim().split(' ');
            var p = +input_arrays[0];
            var l = +input_arrays[1];
			
            var selectStr = s.substr(p,l);
            var changedStr = selectStr.split("").reverse().join("");
            
            var frontStr = s.slice(0,p+l);
            
            var endStr = s.slice(p+l);
            
            output = frontStr + changedStr + endStr;
        	s = output;
            //你的代码
		
        }
        console.log(s);
        
    }
    
    
   
});