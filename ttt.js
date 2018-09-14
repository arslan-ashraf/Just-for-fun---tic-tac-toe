let player_one = 'X'
let player_two = 'O'
let current_turn = player_one
let board = document.querySelector('.board')
let winning_combinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

board.addEventListener('click', function(e){
	e.target.innerHTML = current_turn
	current_turn = current_turn == player_one ? player_two : player_one
	if (check_winner()) alert('someone won')
})

function check_winner(){
	let cells = Array.prototype.slice.call(document.querySelectorAll('.cell'))
	let location = cells.map(function(cell){
		return cell.innerHTML
	})
	console.log(location)
	for(let i = 0; i < winning_combinations.length; i++){
		let combo = winning_combinations[i]
		if (location[combo[0]] == location[combo[1]] && location[combo[1]] == location[combo[2]] 
			&& location[combo[0]].length == 1 
			&& location[combo[1]].length == 1 
			&& location[combo[2]].length == 1){
			return true
		}
	}
}