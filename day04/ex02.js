var n;

n = prompt("숫자를 입력하시오.","");
document.write("<div>");
document.write("<h2>4의 배수일까 아닐까</h2>");
if(n%4==0)
  document.write(n+"는 4의 배수입니다");
else
  document.write(n+"는 4의 배수가 아닙니다.");
document.write("</div>");