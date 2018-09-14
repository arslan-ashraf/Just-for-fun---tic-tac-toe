console.log('slfdksdj')

let player_one = 'X'
let player_two = 'O'
let current_turn = player_one
let board = document.querySelector('.board')

board.addEventListener('click', function(e){
	e.target.innerHTML = current_turn
	current_turn = current_turn == player_one ? player_two : player_one
})