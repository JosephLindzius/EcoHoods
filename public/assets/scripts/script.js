let i = 0;
const text = document.getElementById("text").innerText;
let container = document.getElementById("text");
container.innerText = "";
const box = document.getElementById('box');
let checker = true;
let direction = 1;

function getSpeed () {
    const speed = Math.floor(Math.random() * 10 + 1);
    console.log(speed);
    return speed;
}

function sin (x) {
    let height = Math.sin(x);
    return height;
}

setInterval(function () {

        if (box) {

            console.log('test');
            let boxLeftSide = box.offsetLeft;
            let boxRightSide = boxLeftSide + box.offsetWidth;

            let speed = getSpeed();

            if (checker === true && boxRightSide > document.body.offsetWidth) {
                direction = -1;
                checker = false;
            }
            if (checker === false && boxLeftSide < 0) {
                direction = 1;
                checker = true;
            }
            box.style.left = (boxLeftSide + speed * direction) + "px";
            console.log(checker);
            console.log(direction);


        }
    }, 20
);



setInterval(function(){
        if (i < text.length) {
            container.innerHTML += text.charAt(i);
            i++;
        }
    }

    , 200);