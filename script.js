// console.log("Welcome to tic toe Game");
// let music = new Audio("click.mp3");
// let turn = new Audio("change_turn.mp3");
// let gameover = new Audio("ringtone.mp3")
// let Turn = "X";
// let  gameisover = false;

// // function to change the turn
// const change_turn=()=>{
//     return Turn === "X" ? "0": "X";
// }

// //function to check win
// const checkWin = ()=>{
// let boxtext = document.getElementsByClassName("boxtext");
// let wins = [
//     [0,1,2, 5,5,0],
//     [3,4,5, 5,15,0],
//     [6,7,8,5,25,0],
//     [0,3,6,-5,15,90],
//     [1,4,7,5,15,90],
//     [2,5,8,15,15,90],
//     [0,4,8,5,15,45],
//     [2,4,6,5,15,135],
// ]
// wins.forEach(e =>{
//     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !==""){
//         document.querySelector(".info").innerText = boxtext[e[0]].innerText + " is Won";
//         gameisover = true
//         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
//         document.querySelector(".line").style.transform =` translate(${e[3]}vw, ${e[4]}vw) rotate(${e[4]}deg)`
//         document.querySelector(".line").style.width = "20vw";
//     }
// })
// }

// //Game logic
// // gameover.play();
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element =>{
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click',()=>{
//         if(boxtext.innerText === ''){
//             boxtext.innerText = Turn;
//            Turn =  change_turn();
//             turn.play();
//             checkWin();
//             if(!gameisover){           
//                 document.getElementsByClassName("info")[0].innerText = " Turn for " + Turn;
//             }
//         }
//     })
// })
// // add onclick listener to reset
// reset.addEventListener('click', ()=>{
//     let boxtexts = document.querySelectorAll('.boxtext')
//     Array.from(boxtexts).forEach(element=>{
//         element.innerText = "";
//     })
//     turn = "X"
//     gameisover = false
//     document.querySelector(".line").style.width = "0vw";
//     document.getElementsByClassName("info")[0].innerText = "turn for" + Turn
//     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
// });
console.log("Welcome to Tic Tac Toe")
let music = new Audio("click.mp3")
let audioTurn = new Audio("change_turn.mp3")
let gameover = new Audio("ringtone.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
gameover.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

