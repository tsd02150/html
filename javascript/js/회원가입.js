let uid = document.querySelector("#user_id");
let pw1 = document.querySelector("#user_pw1");
let pw2 = document.querySelector("#user_pw2");

uid.onchange = () => {
	if ((uid.value.length < 4 || uid.value.length > 15) && uid.value != '') {
		alert("4~15자리의 영문과 숫자로 입력하시오");
		uid.select();
	}
}
pw1.onchange = () => {
	if (pw1.value.length < 8) {
		alert("8자리 이상 입력하세요");
		pw1.value = "";
		pw1.focus();
	}
}
pw2.onchange = () => {
	if (pw1.value != pw2.value) {
		alert("패스워드가 다릅니다.");
		pw2.value = "";
		pw2.focus();
	}
}

// uid.onchange = checkId;
// pw1.onchange = checkPw;
// pw2.onchange = comparePw;
// function checkId() {
// 	if (uid.value.length < 4 || uid.value.length > 15) {
// 		alert("4~15자리의 영문과 숫자로 입력하시오");
// 		uid.select();
// 	}
// }
// function checkPw() {
// 	if (pw1.value.length < 8) {
// 		alert("8자리 이상 입력하세요");
// 		pw1.value = "";
// 		pw1.focus();
// 	}
// }
// function comparePw() {
// 	if (pw1.value != pw2.value) {
// 		alert("패스워드가 다릅니다.");
// 		pw2.value = "";
// 		pw2.focus();
// 	}
// }