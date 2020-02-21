// alert('Greetings Mr.X  Please choose the suprise box!!')
let nextVar = '';
let preVar = '';
box2 = () => {
    let i = 0;
    setInterval(() => {
        if (i === 3) {
            i = 0;
            console.log(i)
        }
        let colors = ['black', 'red', 'green'];
        // color = colors.length;
        document.getElementById('box2').style.background = colors[i];
        i++;
    }, 3000)
}

box2();



box1 = () => {
    document.getElementById('box3').innerHTML += `<p>Oops something wrong?</p>`;
}


let next = () => {
    let i = 0;

    nextVar = setInterval(() => {
        if (i === 3) {
            i = 0;
            console.log(i)
        }
        let colorBox = ['black', 'red', 'green'];
        // console.log(colorBox)
        document.getElementById('box4').style.background = colorBox[i];
        i++;
    }, 2000)
}

let prev = () => {
    let i = 2;
    preVar = setInterval(() => {
        if (i < 0) {
            i = 2;
            console.log(i)
        }
        let colorBox = ['black', 'red', 'green'];
        console.log(colorBox)
        document.getElementById('box4').style.background = colorBox[i];
        i--;
    }, 2000)
}



document.onkeyup = (event) => {

    x = event.which || event.keyCode;
    if (x == 39 || x == 38) {
        clearInterval(nextVar)
        clearInterval(preVar)
        rightPressed = true;
        next();
        console.log("rightpressed")

    } else if (x == 37 || x == 40) {
        clearInterval(preVar)
        clearInterval(nextVar)
        leftPressed = true;
        console.log("leftpressed")
        prev();

    }

}