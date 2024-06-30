const player = class {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}
};

const player1 = new player(prompt('Please input your name!'), 'white');
const player2 = new player(prompt('Please input your name!'), 'black');

let currentPlayer = player1;
$('h3').text(player1.name + "'s turn. You are ⚪️.");

let table = $('.board tr');
let numRow = $('.board tr').length;
let numCol = $('.board tr:first td').length;
let numOfTurn = 0;

let changeColor = (row, column, color) => {
	return table
		.eq(row)
		.find('td')
		.eq(column)
		.find('button')
		.css('background-color', color);
};

let findColor = (row, column) => {
	return table
		.eq(row)
		.find('td')
		.eq(column)
		.find('button')
		.css('background-color');
};

let checkBottom = (column) => {
	for (var row = numRow - 1; row > -1; row--) {
		if (findColor(row, column) === 'rgb(128, 128, 128)') {
			return row;
		}
	}
};

let changePlayer = () => {
	if (currentPlayer === player1) {
		currentPlayer = player2;
		$('h3').text(player2.name + "'s turn. You are ⚫️.");
	} else {
		currentPlayer = player1;
		$('h3').text(player1.name + "'s turn. You are ⚪️.");
	}
};

let validateWinner = (row, column) => {
	// Validation 1: vertical validation
	let Vcounter = 1;

	// bottom counter
	for (var x = row + 1; x < numRow; x++) {
		if (findColor(x, column) === findColor(row, column)) {
			Vcounter = Vcounter + 1;
			if (Vcounter === 4) {
				return true;
			}
		} else {
			break;
		}
	}

	// Validation 2: horizontal validation
	let Hcounter = 1;

	// left counter
	for (var x = column - 1; x > -1; x--) {
		if (findColor(row, x) === findColor(row, column)) {
			Hcounter = Hcounter + 1;
			if (Hcounter === 4) {
				return true;
			}
		} else {
			break;
		}
	}

	// right counter
	for (var x = column + 1; x < numCol; x++) {
		if (findColor(row, x) === findColor(row, column)) {
			Hcounter = Hcounter + 1;
			if (Hcounter === 4) {
				return true;
			}
		} else {
			break;
		}
	}

	// Validation 3: upper left and bottom right validation
	let ULThreshold;
	let BRThreshold;
	let D1counter = 1;

	// upper left counter
	if (row < column) {
		ULThreshold = row;
	} else {
		ULThreshold = column;
	}

	for (var x = 1; x <= ULThreshold; x++) {
		if (findColor(row - x, column - x) === findColor(row, column)) {
			D1counter = D1counter + 1;
			if (D1counter === 4) {
				return true;
			}
		} else {
			break;
		}
	}

	// bottom right counter
	if (numRow - (row + 1) < numCol - (column + 1)) {
		BRThreshold = numRow - (row + 1);
	} else {
		BRThreshold = numCol - (column + 1);
	}

	for (var x = 1; x <= BRThreshold; x++) {
		if (findColor(row + x, column + x) === findColor(row, column)) {
			D1counter = D1counter + 1;
			if (D1counter === 4) {
				return true;
			}
		} else {
			break;
		}
	}

	// Validation 4: upper right and bottom left validation
	let URThreshold;
	let BLThreshold;
	let D2counter = 1;

	// upper right counter
	if (row < numCol - (column + 1)) {
		URThreshold = row;
	} else {
		URThreshold = numCol - (column + 1);
	}

	for (var x = 1; x <= URThreshold; x++) {
		if (findColor(row - x, column + x) === findColor(row, column)) {
			D2counter = D2counter + 1;
			if (D2counter === 4) {
				return true;
			}
		} else {
			break;
		}
	}

	// bottom left counter
	if (numRow - (row + 1) < column) {
		BLThreshold = numRow - (row + 1);
	} else {
		BLThreshold = column;
	}

	for (var x = 1; x <= BLThreshold; x++) {
		if (findColor(row + x, column - x) === findColor(row, column)) {
			D2counter = D2counter + 1;
			if (D2counter === 4) {
				return true;
			}
		} else {
			break;
		}
	}
};

$('.board button').click(function () {
	numOfTurn = numOfTurn + 1;
	let column = $(this).closest('td').index();
	let row = checkBottom(column);
	if (row === undefined) {
		alert('Place your chip in the empty space!');
	} else {
		changeColor(row, column, currentPlayer.color);
		let winner = validateWinner(row, column);
		console.log(winner);
		if (winner === true) {
			$('.board button').off('click');
			$('h3').text(currentPlayer.name + ' ⚫️ Win. Congratulations 🎉.');
		} else {
			changePlayer();
			if (numOfTurn === numCol * numRow) {
				$('.board button').off('click');
				$('h3').text("It's a tie 🤡.");
			}
		}
	}
});
