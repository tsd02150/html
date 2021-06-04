function addNum(a, b) {
  var sum = a + b; //지역변수
  alert("결과값: "+sum);
  return sum;
}

var num1 = parseInt(prompt("입력1",""));
var num2 = parseInt(prompt("입력2",""));
var sum = addNum(num1, num2); //전역변수