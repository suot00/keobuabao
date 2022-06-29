function getUserChoice(userChoices) {
//  get choice user 
 var userChoice = userChoices ; 

//get choice computer
 const computerChoice = getComputerChoice();
//switch check
 switch (userChoice + computerChoice) {
        case "sp":
        case "rs":
        case "pr":
            win();
            break;
        case "sr":
        case "rp":    
        case "ps":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
}

 document.querySelector(".resultUser > span").innerHTML=userChoice ;
 document.querySelector(".resultComputer > span").innerHTML=computerChoice;
}

//get choice of computer 
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function win() {
    color="blue";
    message="Bạn Thắng ";
    document.querySelector(".textWho").innerHTML =`<h3 style="color: ${color}">${message}</h3>`;
}

function lose() {
    color="red";
    message="Bạn Thua ";
    document.querySelector(".textWho").innerHTML = `<h3 style="color: ${color}">${message}</h3>`;
}

function draw() {
    color="green";
    message="Hòa";
    document.querySelector(".textWho").innerHTML = `<h3 style="color: ${color}">${message}</h3>`;
}
   

