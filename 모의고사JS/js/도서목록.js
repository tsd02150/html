let input_text = document.querySelector("#book");
let btn = document.querySelector("#add");
let b_list = document.querySelector("#bookList");

let bookList=[];
btn.addEventListener('click',addbook);

function addbook(){
  if(input_text.value==""){
    alert("내용을 입력해 주세요");
    input_text.focus();
  }
  else
  {
    bookList.push(input_text.value);
    input_text.value="";
    input_text.focus();
    showList();
  }
}

// btn.onclick=()=>{
//   if(input_text.value==""){
//     alert("내용을 입력해 주세요");
//     input_text.focus();
//   }
//   else
//   {
//     bookList.push(input_text.value);
//     console.log(input_text.value);
//     input_text.value="";
//     input_text.focus();
//     showList();
//   }
//   console.log(b_list);
// }

function showList(){
  let list='<ul>';
  for(let i in bookList){
    console.log(bookList[i]);
    list += `<li>${bookList[i]} <span class='del' id='${i}'>x<span></li>`;
  }
  list+='</ul>';
  b_list.innerHTML=(list);

  let delList = document.querySelectorAll('.del');
  for(let ele of delList){
    ele.addEventListener('click',remove);
  }
}

function remove(){
  let delNum = this.getAttribute('id');
  bookList.splice(delNum,1);
  showList();
}