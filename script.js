let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset");
let newGamebtn=document.querySelector("#New-button");
let msgContainer=document.querySelector(".msg-Container");
let msg=document.querySelector("#msg");

let turnO=true;            //playerX playerO
let count = 0; //To Track Draw

const winPatterns=[

    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6],

 
];
const resetGame=()=>{
    let turnO=false; 
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("Button was Clicked");
      
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner =checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
          }


    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}
const showWinner=(Winner)=>{
    msg.innerText=`Congratulation, winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
   
}


const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );

        let pos1val=  boxes[pattern[0]].innerText;
        let pos2val=  boxes[pattern[1]].innerText;
        let pos3val=  boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("winner",pos1val);

                showWinner(pos1val);
                return true;
            }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)








