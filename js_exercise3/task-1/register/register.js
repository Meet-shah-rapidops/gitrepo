const email = document.getElementById('email');
const password = document.getElementById('password');
const name = document.getElementById('name');
const confirmPassword = document.getElementById('confirmPassword');
let userArr = JSON.parse(localStorage.getItem('userArr')) ? JSON.parse(localStorage.getItem('userArr')) : [];
let role;
let courses = [];



const register = () => {
	if (email.value == '') {
		alert('please enter your email ');
	} else if (name.value == '') {
		alert('please enter your Name');
	} else if (password.value == '') {
		alert('please enter your password');
	} else if (confirmPassword.value == '') {
		alert('please enter your Confirm password');
	} else if (password.value !== confirmPassword.value) {
		alert('Passwords do not match.');
	} else {
		if (document.getElementById('admin').checked) {
			role = document.getElementById('admin').value;
		} else {
			role = document.getElementById('student').value;
		}
		const userObj = {
			email: email.value,
			password: password.value,
			name: name.value,
			role: role,
			courses
		}

		userArr.push(userObj);
		localStorage.setItem('userArr', JSON.stringify(userArr));
		window.location.href = '../login/login.html';
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

function cEye() {
	let x = document.getElementById('confirmPassword');
	if (x.type === 'password') {
		x.type = 'text';
	} else {
		x.type = 'password';
	}
}