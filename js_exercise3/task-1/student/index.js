let currentUser = localStorage.getItem('currentUser');
let userArr = localStorage.getItem('userArr');
let coursesArr = JSON.parse(localStorage.getItem('coursesArr'));
userArr = JSON.parse(userArr);
let name;
let result = '';

/////////////////////////////////////////////////////////////////for session/////////////////////////////////////////////////////////////

if (!localStorage.getItem('currentUser')) {
    window.location.href = '../login/login.html';
} else {
    for (let i = 0; i < userArr.length; i++) {
        if (currentUser === userArr[i].email) {
            if (userArr[i].role === "student") {
                // window.location.href = '../student/index.html';
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

//////////////////////////////////////////////////////////////For assigned courses/////////////////////////////////////////////////////////////

for (let user of userArr) {
    if (currentUser === user.email) {
        name = user.name;
        course = user.courses;
        // console.log(course)
        for (let i = 0; i < course.length; i++) {
            img = coursesArr[course[i] - 1].courseImg;
            res = img.slice(12);

            result += ` <div class='col-sm-6 col-md-4 col-lg-4'>
                        <div class="card text-center">
                        <img src = 'file:///home/ad.rapidops.com/meet.shah/Downloads/${res}'>
                        <div class="card-body">
                            <h5 class="card-title">HTML Course</h5>
                            <a href='${coursesArr[course[i] - 1].courseLink}'>${coursesArr[course[i] - 1].courseName}</a>
                        </div>
                        </div>
                    </div>`
        }
        document.getElementById("assignedCourse").innerHTML = result;

    }
}