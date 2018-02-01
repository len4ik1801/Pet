//задача 1
var array = [1,2];
for(i = 0; i < array.length; i++) {
  function randomInteger(min, max) {
      // var rand = min + Math.random() * (max + 1 - min) + min;
      // rand = Math.floor(rand);
      // return rand;
      return Math.floor(Math.random() * (max + 1 - min) + min);
    }
  alert(randomInteger(248, 617));
}
//задача2
var Num = function (){
  this.min = 2;
  this.max = 10;
  this.ave = 5;
  this.sum = 17;
};
var numbers = new Num();
console.log(numbers);

//задача3
function arr (array) {
	for ( i = 0; i < array.length; i++ ){
    array[i]= array[i].toString();
  }
  console.log(array);
  }
  arr([5, 6, 7]);
