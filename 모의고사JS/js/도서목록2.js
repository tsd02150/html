let input_list = document.querySelector('#book');
let btn = document.querySelector('#add');
let bookList = document.querySelector('#bookList');
let b_list = [];

input_list.addEventListener('keydown', (event) => enterPush(event));
btn.addEventListener('click', datainput);

function enterPush(e) {
  if (e.keyCode == 13) {
    datainput();
    e.returnValue = false;
  }
}
function datainput() {
  if (input_list.value == "") {
    alert("내용을 입력 하시오");
    input_list.focus();
  }
  else {
    if (b_list.indexOf(input_list.value) == -1) {
      b_list.push(input_list.value);
      input_list.value = "";
      input_list.focus();
      showList();
    }
    else {
      alert("중복된 데이터");
      input_list.value = "";
      input_list.focus();
    }
  }
}

let listData = "";
function showList() {
  listData = "<ul>";
  for (let i in b_list) {
    listData += `<li>${b_list[i]}<span id='${i}' class='del'>x</span></li>`;
  }
  listData += "</ul>";
  bookList.innerHTML = (listData);

  let del = document.querySelectorAll('.del');
  for (let j of del) {
    j.addEventListener('click', remove);
  }
}
function remove() {
  b_list.splice(this.getAttribute('id'), 1);
  showList();
}