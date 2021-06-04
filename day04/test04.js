console.log("hello");
var heading = document.querySelector('#heading');
heading.onclick = function () {
  heading.style.color = "red";
  //alert("하위");
  // var reply = confirm("저장하실?");
  // console.log(reply);
  var name = prompt("이름?","홍길동");
  console.log(name);
  document.write("<b>"+name+"</b>" + "님 접속 환영");
};