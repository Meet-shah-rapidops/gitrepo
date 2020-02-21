let email = document.getElementById('email');
let password = document.getElementById('password');
let userArr = localStorage.getItem('userArr');
userArr = JSON.parse(userArr);


login = () => {

	if (email.value == '') {
		alert('please enter your email ');
	} else if (password.value == '') {
		alert('please enter your password');
	} else {
		for (let i = 0; i < userArr.length; i++) {

			if (email.value === userArr[i].email && password.value === userArr[i].password) {
				localStorage.setItem('currentUser', email.value);
				if (userArr[i].role === "admin") {
					window.location.href = '../admin/index.html';
				} else {
					window.location.href = '../student/index.html';
				}
			}
			if (email.value !== userArr[i].email && password.value !== userArr[i].password) {
				alert("incorrect credentials");
			}
		}

	}
};




function eye() {
	let x = document.getElementById('password');
	if (x.type === 'password') {
		x.type = 'text';
	} else {
		x.type = 'password';
	}
}