
let currentPlayer = 'X';

let drawCount = 0 ;
let noWin = true ;

let checkWinMatch = function(){
	 noWin = false ;
}

let playerX_Score = 0 ;
let playerY_Score = 0 ;

let switchPlayer = () => {
	currentPlayer = (currentPlayer==='X') ? 'O' : 'X';
};

let btn = document.querySelectorAll('.btn');
let btnMode = document.querySelector('#btn-pic');
let playerScores = document.querySelectorAll('#scores p');
let bodyEl = document.querySelector('body');
let btnNewGame = document.querySelector('#new-game');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let b9 = document.querySelector('.b9');
let activePlayer = document.querySelector('#current-player');
let playerX = document.querySelector('#x-score');
let playerY = document.querySelector('#y-score');
bodyEl.style.background = 'white';

btnMode.addEventListener('click',()=>{
	if((bodyEl.style.background==='white')){
		bodyEl.style.background = 'black'
		playerScores[0].style.color='blue';
		playerScores[1].style.color='blue';
	}else{
		bodyEl.style.background = 'white'
		playerScores[0].style.color='black';
		playerScores[1].style.color='black';
	}
});

let setEmptyButtons = () => {
	b1.textContent='';
	b2.textContent='';
	b3.textContent='';
	b4.textContent='';
	b5.textContent='';
	b6.textContent='';
	b7.textContent='';
	b8.textContent='';
	b9.textContent='';
};

let EnableButtons = () => {
	b1.disabled = false;
	b2.disabled = false;
	b3.disabled = false;
	b4.disabled = false;
	b5.disabled = false;
	b6.disabled = false;
	b7.disabled = false;
	b8.disabled = false;
	b9.disabled = false;
}

let checkEmptyButtons = () => {
	if(b1.textContent == '')b1.disabled=true;
	if(b2.textContent == '')b2.disabled=true;
	if(b3.textContent == '')b3.disabled=true;
	if(b4.textContent == '')b4.disabled=true;
	if(b5.textContent == '')b5.disabled=true;
	if(b6.textContent == '')b6.disabled=true;
	if(b7.textContent == '')b7.disabled=true;
	if(b8.textContent == '')b8.disabled=true;
	if(b9.textContent == '')b9.disabled=true;
}

let disableAllButtons = function(){
	b1.disabled = true ;
	b2.disabled = true ;
	b3.disabled = true ;
	b4.disabled = true ;
	b5.disabled = true ;
	b6.disabled = true ;
	b7.disabled = true ;
	b8.disabled = true ;
	b9.disabled = true ;
}; 

let checkWin = () => {
	
								/** Matching Rows **/
								
					/* Matching rows for player X */
	if(b1.textContent=='X' && b2.textContent=='X' 
	&& b3.textContent =='X'){
				checkWinMatch();
				alert('Player X wins');
				b1.style.backgroundColor ='pink';
				b2.style.backgroundColor ='pink';
				b3.style.backgroundColor ='pink';
				checkEmptyButtons();
				playerX_Score++;
				playerX.textContent = playerX_Score;
			}
			
	if(b4.textContent=='X' && b5.textContent=='X' 
	&& b6.textContent =='X'){
				checkWinMatch();
				alert('Player X wins');
				b4.style.backgroundColor ='blue';
				b5.style.backgroundColor ='blue';
				b6.style.backgroundColor ='blue';
				checkEmptyButtons();
				playerX_Score++;
				playerX.textContent = playerX_Score;
			}
			
	if(b7.textContent=='X' && b8.textContent=='X' 
	&& b9.textContent =='X'){
				checkWinMatch();
				alert('Player X wins');
				b7.style.backgroundColor ='orange';
				b8.style.backgroundColor ='orange';
				b9.style.backgroundColor ='orange';
				checkEmptyButtons();
				playerX_Score++;
				playerX.textContent = playerX_Score;
			}
			
					/* Matching rows for player O */
if(b1.textContent=='O' && b2.textContent=='O' 
	&& b3.textContent =='O'){
				checkWinMatch();
				alert('Player O wins');
				b1.style.backgroundColor ='pink';
				b2.style.backgroundColor ='pink';
				b3.style.backgroundColor ='pink';
				checkEmptyButtons();	
				playerY_Score++;
				playerY.textContent = playerY_Score;
			}
			
	if(b4.textContent=='O' && b5.textContent=='O' 
	&& b6.textContent =='O'){
				checkWinMatch();
				alert('Player O wins');
				b4.style.backgroundColor ='blue';
				b5.style.backgroundColor ='blue';
				b6.style.backgroundColor ='blue';
				checkEmptyButtons();
				playerY_Score++;
				playerY.textContent = playerY_Score;
			}
			
	if(b7.textContent=='O' && b8.textContent=='O' 
	&& b9.textContent =='O'){
				checkWinMatch();
				alert('Player O wins');
				b7.style.backgroundColor ='orange';
				b8.style.backgroundColor ='orange';
				b9.style.backgroundColor ='orange';
				checkEmptyButtons();
				playerY_Score++;
				playerY.textContent = playerY_Score;
			}
			
			/** Matching Columns **/
		
	/* Matching Columns for player X */	
	if(b1.textContent=='X' && b4.textContent=='X' 
	&& b7.textContent =='X'){
				checkWinMatch();
				alert('Player X wins');
				b1.style.backgroundColor ='pink';
				b4.style.backgroundColor ='pink';
				b7.style.backgroundColor ='pink';
				checkEmptyButtons();
				playerX_Score++;
				playerX.textContent = playerX_Score;
			}
			
	if(b2.textContent=='X' && b5.textContent=='X' 
	&& b8.textContent =='X'){
				checkWinMatch();
				alert('Player X wins');
				b2.style.backgroundColor ='blue';
				b5.style.backgroundColor ='blue';
				b8.style.backgroundColor ='blue';
				checkEmptyButtons();
				playerX_Score++;
				playerX.textContent = playerX_Score;
			}
			
	if(b3.textContent=='X' && b6.textContent=='X' 
	&& b9.textContent =='X'){
				checkWinMatch();
				alert('Player X wins');
				b3.style.backgroundColor ='orange';
				b6.style.backgroundColor ='orange';
				b9.style.backgroundColor ='orange';
				checkEmptyButtons();
				playerX_Score++;
				playerX.textContent = playerX_Score;
			}

			/* Matching Columns for player O */
			if(b1.textContent=='O' && b4.textContent=='O' 
	&& b7.textContent =='O'){
				checkWinMatch();
				alert('Player O wins');
				b1.style.backgroundColor ='pink';
				b4.style.backgroundColor ='pink';
				b7.style.backgroundColor ='pink';
				checkEmptyButtons();	
				playerY_Score++;
				playerY.textContent = playerY_Score;
			}
			
	if(b2.textContent=='O' && b5.textContent=='O' 
	&& b8.textContent =='O'){
				checkWinMatch();
				alert('Player O wins');
				b2.style.backgroundColor ='blue';
				b5.style.backgroundColor ='blue';
				b8.style.backgroundColor ='blue';
				checkEmptyButtons();
				playerY_Score++;
				playerY.textContent = playerY_Score;
			}
			
	if(b3.textContent=='O' && b6.textContent=='O' 
	&& b9.textContent =='O'){
				checkWinMatch();
				alert('Player O wins');
				b3.style.backgroundColor ='orange';
				b6.style.backgroundColor ='orange';
				b9.style.backgroundColor ='orange';
				checkEmptyButtons();
				playerY_Score++;
				playerY.textContent = playerY_Score;
			}
			
			/** Matching Diagonals **/
			
/* Matching Diagonals for player X */
	if(b1.textContent=='X' && b5.textContent=='X' 
	&& b9.textContent =='X'){
				checkWinMatch();
				alert('Player X wins');
				b1.style.backgroundColor ='pink';
				b5.style.backgroundColor ='pink';
				b9.style.backgroundColor ='pink';
				checkEmptyButtons();	
				playerX_Score++;
				playerX.textContent = playerX_Score;
			}
			
	if(b3.textContent=='X' && b5.textContent=='X' 
	&& b7.textContent =='X'){
				checkWinMatch();
				alert('Player X wins');
				b3.style.backgroundColor ='blue';
				b5.style.backgroundColor ='blue';
				b7.style.backgroundColor ='blue';
				checkEmptyButtons();
				playerX_Score++;
				playerX.textContent = playerX_Score;
			}
			
/* Matching Diagonals for player O */
if(b1.textContent=='O' && b5.textContent=='O' 
	&& b9.textContent =='O'){
				checkWinMatch();
				alert('Player O wins');
				b1.style.backgroundColor ='pink';
				b5.style.backgroundColor ='pink';
				b9.style.backgroundColor ='pink';
				checkEmptyButtons();	
				playerY_Score++;
				playerY.textContent = playerY_Score;				
			}
			
	if(b3.textContent=='O' && b5.textContent=='O' 
	&& b7.textContent =='O'){
				checkWinMatch();
				alert('Player O wins');
				b3.style.backgroundColor ='blue';
				b5.style.backgroundColor ='blue';
				b7.style.backgroundColor ='blue';
				checkEmptyButtons();
				playerY_Score++;
				playerY.textContent = playerY_Score;
			}

}

let buttonClick = (b) => {
	b.addEventListener('click',()=>{
		if(b.textContent==''){
			b.textContent = currentPlayer;
			drawCount++;
			checkWin();
			if(drawCount===9 && noWin === true){
				alert("It's a draw!");
			}
			switchPlayer();
			activePlayer.textContent = currentPlayer;
		}
	});
};

buttonClick(b1);
buttonClick(b2);
buttonClick(b3);
buttonClick(b4);
buttonClick(b5);
buttonClick(b6);
buttonClick(b7);
buttonClick(b8);
buttonClick(b9);

let setButtonsDefaultBackColor = () => {
	b1.style.backgroundColor = 'lightgrey';
	b2.style.backgroundColor = 'lightgrey';
	b3.style.backgroundColor = 'lightgrey';
	b4.style.backgroundColor = 'lightgrey';
	b5.style.backgroundColor = 'lightgrey';
	b6.style.backgroundColor = 'lightgrey';
	b7.style.backgroundColor = 'lightgrey';
	b8.style.backgroundColor = 'lightgrey';
	b9.style.backgroundColor = 'lightgrey';
};

btnNewGame.addEventListener('click',() => {
	setEmptyButtons();
	EnableButtons();
	setButtonsDefaultBackColor();
	drawCount = 0;
	noWin = true;
});



/* Against Computer Logic */
let randomPick = Math.floor(Math.random*9+1);
