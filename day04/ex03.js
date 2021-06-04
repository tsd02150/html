var n,i,j;
j=0;
n = prompt("몇 까지 3의 배수를 찾을까요?","");

for(i=1;i<=n;i++){
  if(i%3==0){
    j++;
    document.write(i+",");
    
  }
}
document.write("<br>");
document.write(n+"까지 3의 배수의 개수 : "+j);