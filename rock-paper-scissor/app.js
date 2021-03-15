const userS = 0;
const compS = 0;
const userS_span = document.getElementById("user-score");
const compS_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scis_div = document.getElementById("s");
/*all above was "cashing the dom" - make vars and store 
references so that we can use it everywhere 
this is good so that we dont have to call references everytime
i.e. we dont have to do all the doc.getElemen again and again*/

main();

function main() {
    rock_div.addEventListener('click', function() {
        //console.log("you clicked on rock");  //but console log doesn't do our work na. this was checking.
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        //console.log("you clicked on paper");
        game("p");
    })
    
    scis_div.addEventListener('click', function() {
        //console.log("you clicked on scissors");
        game("s");
    })
}

function game(userChoice) {
    console.log(" :poop  ")
}