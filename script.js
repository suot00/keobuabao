const listValue = [
    { name: "scissors", icon: "✌",num:1},
    { name: "rock", icon: "✊",num:2 },
    { name: "paper", icon: "✋",num:3 }
  ];
 
// get random computer
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return listValue[randomNumber];
}
// check
const compare = (value1,value2) => {
      if (value1 == 1 && value2 == 3) {
        return 1;
      }
      if (value1 == 3 && value2 == 1) {
        return -1;
      }
      if (value1 === value2) {
        return 0;
      } else {
        return value1 < value2 ? -1 : 1;
      }
}
function getUserChoice(userChoice){
   var valueUser = 0 ;
 switch (userChoice) {
        case "scissors":
          document.querySelector('.resultUser > span').innerHTML= "✌";
          valueUser=1;
            break;
        case "rock":  
        document.querySelector('.resultUser > span').innerHTML= "✊";
        valueUser=2;
            break;
        case "paper":
            document.querySelector('.resultUser > span').innerHTML= "✋";
            valueUser=3;
            break;
}
const computerChoice = getComputerChoice();
 document.querySelector(".resultComputer > span").innerHTML=computerChoice.icon;
 
 const result = compare(valueUser, computerChoice.num);
 if (result === -1) {
    message = "Bạn đã thua";
    document.querySelector('.textWho').innerHTML=message;
  } else if (result === 0) {
    message = "Bạn đã hòa"; 
    document.querySelector('.textWho').innerHTML=message;
  } else {
    message = "Bạn đã thắng";
    document.querySelector('.textWho').innerHTML=message;
  }
  
}

