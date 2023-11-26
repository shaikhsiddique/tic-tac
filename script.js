console.log('hello');
const turnaudio= new Audio("ting.mp3");
const gameoveraudio=new Audio("gameover.mp3");
let turn ='X';
const a=document.getElementById('1');
const b=document.getElementById('2');
const c=document.getElementById('3');
const d=document.getElementById('4');
const e=document.getElementById('5');
const f=document.getElementById('6');
const g=document.getElementById('7');
const h=document.getElementById('8');
const i=document.getElementById('9');
// box
const b1=document.getElementById('a');
const b2=document.getElementById('b');
const b3=document.getElementById('c');
const b4=document.getElementById('d');
const b5=document.getElementById('e');
const b6=document.getElementById('f');
const b7=document.getElementById('g');
const b8=document.getElementById('h');
const b9=document.getElementById('i');
let id;
let whose_turn=document.getElementById('whose-turn');

let board =[['','',''],
            ['','',''],
            ['','',''],
            ['','','']]
let gameover=false;
let gif=document.getElementById('gif');
// game-info

function ChangeTurn(){
    if(turn==='X'){
        turn='0';

    }
    else{
        turn='X';
    }
    whose_turn.innerHTML=`${turn}`+'       '+'TURN';
}

function assignValue(id){
if(id===a){
    board[1][1]=turn;
    console.log(`assigned ${turn} to a`);
}
else if(id===b){
    board[1][2]=turn;
    console.log(`assigned ${turn} to b`);
}
else if(id===c){
    board[1][3]=turn;
    console.log(`assigned ${turn} to ${id} c`);
}
else if(id===d){
    board[2][1]=turn;
    console.log(`assigned ${turn} to ${id} d`);
}
else if(id===e){
    board[2][2]=turn;
    console.log(`assigned ${turn} to ${id} e`);
}
else if(id===f){
    board[2][3]=turn;
    console.log(`assigned ${turn} to ${id} f`);
}
else if(id===g){
    board[3][1]=turn;
    console.log(`assigned ${turn} to ${id} g`);
}
else if(id===h){
    board[3][2]=turn;
    console.log(`assigned ${turn} to ${id} h`);
}
else if(id===i){
    board[3][3]=turn;
    console.log(`assigned ${turn} to ${id} i`);
}
    Checkwin();

}

function  Checkwin(){
    if(board[1][1]===turn && board[1][2]===turn && board[1][3]=== turn){
        console.log('win');
        gameover=true;
        gameoveraudio.play();
        whose_turn.innerHTML=`${turn}`+'       '+'WIN';
        gif.classList.remove('gif-hide');
       
      
    }
    else if(board[2][1]===turn && board[2][2]===turn && board[2][3]=== turn){
        console.log('win');
        gameover=true;
        gameoveraudio.play();
        whose_turn.innerHTML=`${turn}`+'       '+'WIN';
        gif.classList.remove('gif-hide');
    }
    else if(board[3][1]===turn && board[3][2]===turn && board[3][3]=== turn){
        console.log('win');
        gameover=true;
        gameoveraudio.play();
        whose_turn.innerHTML=`${turn}`+'       '+'WIN';
        gif.classList.remove('gif-hide');
    }
    else if(board[1][1]===turn && board[2][1]===turn && board[3][1]=== turn){
        console.log('win');
        gameover=true;
        gameoveraudio.play();
        whose_turn.innerHTML=`${turn}`+'       '+'WIN';
        gif.classList.remove('gif-hide');
    }
    else if(board[1][2]===turn && board[2][2]===turn && board[3][2]=== turn){
        console.log('win');
        gameover=true;
        gameoveraudio.play();
        whose_turn.innerHTML=`${turn}`+'       '+'WIN';
        gif.classList.remove('gif-hide');
    }
    else if(board[1][3]===turn && board[2][3]===turn && board[3][3]=== turn){
        console.log('win');
        gameover=true;
        gameoveraudio.play();
        whose_turn.innerHTML=`${turn}`+'       '+'WIN';
        gif.classList.remove('gif-hide');
    }
    else if(board[1][1]===turn && board[2][2]===turn && board[3][3]=== turn){
        console.log('win');
        gameover=true;
        gameoveraudio.play();
        whose_turn.innerHTML=`${turn}`+'       '+'WIN';
        gif.classList.remove('gif-hide');
    }
    else if(board[1][3]===turn && board[2][2]===turn && board[3][1]=== turn){
        console.log('win');
        gameover=true;
        gameoveraudio.play();
        whose_turn.innerHTML=`${turn}`+'       '+'WIN';
        gif.classList.remove('gif-hide');
    }
  
    
    else{
        turnaudio.play();
        ChangeTurn();
       
    }
    
   
}


// Game logic
function print(id,b_id){
    if(gameover===false){  
    console.log('active');
    id.innerText=`${turn}`;
    assignValue(id);
    b_id.removeAttribute('onclick');
    document.querySelector('a').classList.add('line-through');
    }
}

function reset(){
  location.reload();

}
