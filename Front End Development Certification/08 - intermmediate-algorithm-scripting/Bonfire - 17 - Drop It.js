function dropElements(arr, func) {
 	var no = []; 
    var yes = [];
 	for (i = 0; i < arr.length; i++){
 		if (func(arr[i]) === false && no.includes(arr[i]) === false){
 			no.push(arr[i]);
 		} else {
 			yes.push(arr[i]);
 		}
 	}
    return yes;
}
dropElements([1, 2, 3], function(n) {return n < 3; });
