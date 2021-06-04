var i, j, z;

for (i = 1; i <= 5; i++) {
  document.write("<div>");
  document.write("<h2>" + i + "단</h2>");
  for (j = 1; j <= 9; j++) {
    document.write(i + "x" + j + "=" + i * j + "<br>");
  }
  document.write("</div>");
}