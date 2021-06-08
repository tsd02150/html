var cover=document.getElementById("block");
cover.addEventListener("mouseover",function(){
  cover.style.opacity=0.5;
});
cover.addEventListener("mouseout",function(){
  cover.style.opacity=1;
});


var card_click=document.querySelectorAll(".card");
var card_img=document.querySelector(".card-img-top");
card_click.onclick=function(){
  card_click.opacity=0;
  card_img.opacity=1;
};
