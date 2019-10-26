photoArray = ["./assets/img/0.svg", "./assets/img/1.svg", "./assets/img/2.svg"];
let i = 0;
setInterval(function() {
    console.log("soloHouse");
    const img = document.getElementById('soloHouse');
    img.src = photoArray[i];
    console.log("img.src");
    i++;
    if (i > 2) {
         i = 0;
    }

}, 2000);