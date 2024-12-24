let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
let user_sc=document.querySelector("#user-score");
let comp_sc=document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genComputerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = ()=>{
    console.log("Draw Game ...");
    msg.innerText = "Draw...😐";
    msg.style.backgroundColor = "#4f6d7a";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        console.log("You Win...");
        msg.innerText = `You Win...😊 ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        user_sc.innerText = userScore;
    }else {console.log("You Lost...");
        compScore++;
        msg.innerText=`You Lost...😒 ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        comp_sc.innerText = compScore;
    }
};

const playGame=(userChoice)=>{
    console.log("userChoice = ",userChoice);
    const compChoice = genComputerChoice();
    console.log("compChoice = ",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock")userWin = compChoice==="paper"?false:true;
        else if(userChoice==="paper")userWin = compChoice==="scissors"?false:true;
        else userWin=compChoice==="rock"?false:true;
        console.log(userWin);
        showWinner(userWin,userChoice,compChoice);
    }
    
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});