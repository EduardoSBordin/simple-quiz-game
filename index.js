let getBtnA1 = document.getElementsByClassName('#a1');
let getBtnA2 = document.getElementsByClassName('#a2');
let getBtnA3 = document.getElementsByClassName('#a3');

let getBtnA4 = document.getElementsByClassName('#a4');
let getBtnA5 = document.getElementsByClassName('#a5');
let getBtnA6 = document.getElementsByClassName('#a6');

let getBtnA7 = document.getElementsByClassName('#a7');
let getBtnA8 = document.getElementsByClassName('#a8');
let getBtnA9 = document.getElementsByClassName('#a9');
let getBtnFinalScore = document.getElementsByClassName('#btnFinalScore');

let getDivQ1 = document.querySelector("#Q1");
let getDivQ2 = document.querySelector("#Q2");
let getDivQ3 = document.querySelector("#Q3");
let getDivfinalScore = document.querySelector("#finalScore");

let getImg = document.querySelector('img');
let getpScore = document.querySelector('#pScore');

let counter = 0;

        getDivQ1.style.position = "static";
        getDivQ2.style.position = "absolute";
        getDivQ3.style.position = "absolute";
        getDivfinalScore.style.position = "absolute";

        getDivQ1.style.marginLeft = "0%";
        getDivQ2.style.marginLeft = "200%";
        getDivQ3.style.marginLeft = "200%";
        getDivfinalScore.style.marginLeft = "200%";

// Q1
function btnA1(){

        counter++;
        console.log(counter);
        getDivQ1.style.position = "absolute";
        getDivQ2.style.position = "static";
        getDivQ3.style.position = "absolute";
        getDivfinalScore.style.position = "absolute";

        getDivQ1.style.marginLeft = "200%";
        getDivQ2.style.marginLeft = "0%";
        getDivQ3.style.marginLeft = "200%";
        getDivfinalScore.style.marginLeft = "200%";


}
function btnA2(){

    console.log(counter);
        getDivQ1.style.position = "absolute";
        getDivQ2.style.position = "static";
        getDivQ3.style.position = "absolute";
        getDivfinalScore.style.position = "absolute";

        getDivQ1.style.marginLeft = "200%";
        getDivQ2.style.marginLeft = "0%";
        getDivQ3.style.marginLeft = "200%";
        getDivfinalScore.style.marginLeft = "200%";

}
function btnA3(){

    console.log(counter);
    getDivQ1.style.position = "absolute";
    getDivQ2.style.position = "static";
    getDivQ3.style.position = "absolute";
    getDivfinalScore.style.position = "absolute";

    getDivQ1.style.marginLeft = "200%";
    getDivQ2.style.marginLeft = "0%";
    getDivQ3.style.marginLeft = "200%";
    getDivfinalScore.style.marginLeft = "200%";

}
// Q2
function btnA4(){

    console.log(counter);
        getDivQ1.style.position = "absolute";
        getDivQ2.style.position = "absolute";
        getDivQ3.style.position = "static";
        getDivfinalScore.style.position = "absolute";

        getDivQ1.style.marginLeft = "200%";
        getDivQ2.style.marginLeft = "200%";
        getDivQ3.style.marginLeft = "0%";
        getDivfinalScore.style.marginLeft = "200%";
}
function btnA5(){

    counter++;
    console.log(counter);
        getDivQ1.style.position = "absolute";
        getDivQ2.style.position = "absolute";
        getDivQ3.style.position = "static";
        getDivfinalScore.style.position = "absolute";

        getDivQ1.style.marginLeft = "200%";
        getDivQ2.style.marginLeft = "200%";
        getDivQ3.style.marginLeft = "0%";
        getDivfinalScore.style.marginLeft = "200%";

}
function btnA6(){

    console.log(counter);
        getDivQ1.style.position = "absolute";
        getDivQ2.style.position = "absolute";
        getDivQ3.style.position = "static";
        getDivfinalScore.style.position = "absolute";

        getDivQ1.style.marginLeft = "200%";
        getDivQ2.style.marginLeft = "200%";
        getDivQ3.style.marginLeft = "0%";
        getDivfinalScore.style.marginLeft = "200%";

}
// Q3
function btnA7(){

    console.log(counter);
        getDivQ1.style.position = "absolute";
        getDivQ2.style.position = "absolute";
        getDivQ3.style.position = "absolute";
        getDivfinalScore.style.position = "static";

        getDivQ1.style.marginLeft = "200%";
        getDivQ2.style.marginLeft = "200%";
        getDivQ3.style.marginLeft = "200%";
        getDivfinalScore.style.marginLeft = "0%";
    finalScore();
}
function btnA8(){

    console.log(counter);
        getDivQ1.style.position = "absolute";
        getDivQ2.style.position = "absolute";
        getDivQ3.style.position = "absolute";
        getDivfinalScore.style.position = "static";

        getDivQ1.style.marginLeft = "200%";
        getDivQ2.style.marginLeft = "200%";
        getDivQ3.style.marginLeft = "200%";
        getDivfinalScore.style.marginLeft = "0%";
    finalScore();
}
function btnA9(){

    counter++;
    console.log(counter);
        getDivQ1.style.position = "absolute";
        getDivQ2.style.position = "absolute";
        getDivQ3.style.position = "absolute";
        getDivfinalScore.style.position = "static";

        getDivQ1.style.marginLeft = "200%";
        getDivQ2.style.marginLeft = "200%";
        getDivQ3.style.marginLeft = "200%";
        getDivfinalScore.style.marginLeft = "0%";
    finalScore();
}
//---------------
function finalScore(){

    if(counter <= 0){

        getpScore.innerHTML = `Você teve: "0" acertos !`;
    }else if(counter >= 1){

        getpScore.innerHTML = `Você teve: "${counter}" acertos !`;
    }
}
function btnFinalScore(){

        getDivQ1.style.position = "static";
        getDivQ2.style.position = "absolute";
        getDivQ3.style.position = "absolute";
        getDivfinalScore.style.position = "absolute";

        getDivQ1.style.marginLeft = "0%";
        getDivQ2.style.marginLeft = "200%";
        getDivQ3.style.marginLeft = "200%";
        getDivfinalScore.style.marginLeft = "200%";
    counter = 0;
    getpScore.innerHTML = "";
}