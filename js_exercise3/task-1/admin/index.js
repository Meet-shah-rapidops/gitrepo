let currentUser = localStorage.getItem('currentUser');
let userArr = localStorage.getItem('userArr');
userArr = JSON.parse(userArr);
let name;
let coursesArr = JSON.parse(localStorage.getItem('coursesArr')) ? JSON.parse(localStorage.getItem('coursesArr')) : [];
let courseName = document.getElementById("courseName");
let courseImg = document.getElementById("courseImg");
let courseLink = document.getElementById("courseLink");
let courseId = 0;
let result = "";
let img;
let res;
let studentForAssign = '';


/////////////////////////////////////////////////////////////////for session/////////////////////////////////////////////////////////////

if (!localStorage.getItem('currentUser')) {
    window.location.href = '../login/login.html';
} else {
    for (let i = 0; i < userArr.length; i++) {
        if (currentUser === userArr[i].email) {
            if (userArr[i].role === "admin") {
                // window.location.href =userArr '../admin/index.html';
            } else {
                window.location.href = '../login/login.html';
            }
        }
    }
}


//////////////////////////////////////////////////////////for passing a name variable///////////////////////////////////////////////////////

for (let user of userArr) {
    if (currentUser === user.email) {
        name = user.name;
        break;
    }
}
document.getElementById("name").innerHTML = name;

///////////////////////////////////////////////////////////////////for logout///////////////////////////////////////////////////////////////////

logoutBtn = () => {
    let confirmBtn = confirm("Are u sure want to logout?")
    if (confirmBtn == true) {
        localStorage.removeItem('currentUser');
        window.location.href = '../login/login.html';
    } else {
        window.location.href = '#';
    }
}



////////////////////////////////////////////////////////////////for add course/////////////////////////////////////////////////////////////////////////

add = () => {
    if (courseName.value == '') {
        alert('please enter course Name ');
    } else if (courseImg.value == '') {
        alert('please add course Image');
    } else if (courseLink.value == '') {
        alert('please enter course Link');
    } else {


        const courseObj = {
            courseName: courseName.value,
            courseImg: courseImg.value,
            courseLink: courseLink.value,
            courseId: coursesArr.length + 1
        }


        coursesArr.push(courseObj);
        localStorage.setItem('coursesArr', JSON.stringify(coursesArr));
        window.location.href = '../admin/index.html';
    }

}

coursesArrFetch = localStorage.getItem('coursesArr');
coursesArrFetch = JSON.parse(coursesArrFetch);




for (let i = 0; i < coursesArrFetch.length; i++) {
    courseId = coursesArrFetch[i].courseId
    img = coursesArrFetch[i].courseImg;
    res = img.slice(12);

    result += `<div class="col-sm-6 col-md-4 col-lg-4">
    <div class="card text-center">
    <img src = 'file:///home/ad.rapidops.com/meet.shah/Downloads/${res}'>
    <div class="card-body">
        <h5 class="card-title">${coursesArr[i].courseName}</h5>
    </div>
    <div class="card-footer">
            <button type="button" onclick = "assignCourse(${courseId})" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
            Assign Course
        </button>
    </div>
    </div>
    </div>`
}

document.getElementById("allCourse").innerHTML = result;


////////////////////////////////////////////////////////////////Fetch all students in created course////////////////////////////////////////////////////////////////

assignCourse = (courseId) => {

    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].role === "student") {
            // console.log(courseId)
            studentForAssign += `<tr> 
                                    <td>${userArr[i].name}</td>
                                    <td>${userArr[i].email}</td>
                                    <td><input type="checkbox" id="${userArr[i].email}" onclick="sendDataToStudent(${courseId},'${userArr[i].email}')" value = '${courseId}' ${userArr[i].courses.includes(courseId)? "checked" : ""}></td>
                                </tr>`
        }
    }

    document.getElementById("assignCourse").innerHTML = studentForAssign;
    studentForAssign = '';
}

/////////////////////////////////////////////////////send Data To Student///////////////////////////////////////////////////////////////////////////

sendDataToStudent = (courseId, email) => {

    let studentArr = userArr.filter((user) => {
        return user.email === email;
    });
    const userIndex = userArr.indexOf(studentArr[0]);

    if (document.getElementById(email).checked) {
        userArr[userIndex].courses.push(courseId);
        localStorage.setItem('userArr', JSON.stringify(userArr));
    } else {

        const courseIndex = studentArr[0].courses.indexOf(courseId);
        userArr[userIndex].courses.splice(courseIndex, 1);
        localStorage.setItem('userArr', JSON.stringify(userArr));
        console.log(courseIndex)
    }

    // console.log(studentArr)

}