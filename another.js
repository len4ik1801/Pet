// 1
function hm2p1(arr) {
  return arr.reduce(function (previousValue, currentValue) {
  	return previousValue + currentValue + Math.floor(Math.random() * (617 - 248) + 248)
  })
}
// 2
function hm2p2 (a, b, c, d) {
  var min
  var max

  if (a > b && a > c && a > d) {
    max = a
  } else if (b > a && b > c && b > d) {
    max = b
  } else if (c > b && c > a && c > d) {
    max = c
  } else if (d > b && d > c && d > a) {
    max = d
  }

  if (a < b && a < c && a < d) {
    min = a
  } else if (b < a && b < c && b < d) {
    min = b
  } else if (c < b && c < a && c < d) {
    min = c
  } else if (d < b && d < c && d < a) {
    min = d
  }

  return {
    min: min,
    max: max,
    middle: (a + b + c + d)/4,
    sum: a + b + c + d
  }
}

// 3
function hm2p3(array) {
  let obj = {}
  for ( i = 0; i < array.length; i++ ){
    obj[i]= array[i].toString();
  }
  console.log(obj);
  return obj
}

// String => array of chars

// 4
function hm2p4(array) {
  let obj = {}
  let iPre = 0
  for ( i = 0; i < array.length; i++ ){
    if (i % 2 === 0) {
      iPre = i
      obj[i] = []
      obj[i].push(array[i].toString());
    } else {
      obj[iPre].push(array[i].toString());
    }
  }
  console.log(obj);
  return obj
}

// 6
function NewConstructor() {
  this.a = 1
  this.b = 2

  var counter = 0

  function count() {
    counter++
  }

  this.func1 = function (bw3r3rw) {
    count()
    if (bw3r3rw) {
      this.a = bw3r3rw
    }
  }

  this.func2 = function () {
    count()
    return this.a
  }

  this.func3 = function () {
    count()
    return counter
  }
}
