function sumAll(arr){
  arr = range(arr);
  var sum = 0;
  return arr.reduce((val1,val2) => val1 += val2, 0);  
}
function range(arr) {
  arr2 = [];
  for(var i=Math.min.apply(Math, arr); i <= Math.max.apply(Math, arr); i++){
    arr2.push(i);
  }
  return arr2;
}

max([1, 4]);
