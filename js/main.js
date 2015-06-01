$(document).ready(function() {
	
	var currentSize = 40;
	init();

//init default 
function init() {
	generateGrid(currentSize);
	defaultColor();
}

//user input
function userPrompt() {
	var userInput = prompt(' anything < 129');
	currentSize = userInput;
}

//make grid
function generateGrid(gridSize) {

	var squareSize = $("#grid").width() / gridSize - 2;

	 for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			$("#grid").append("<div class='square'></div>");
	} 
		$("#grid").append("<div class='new-row'></div>");
	}

	$('.square').css('height',squareSize);
	$(".square").css('width', squareSize);
	
}

//colors
function trailColor() {
	$(".square").mouseenter(function() {
		$(this).css('background-color', 'black');
	});
	
	$(".square").mouseleave(function () {
		$(this).css('background-color', 'black').fadeOut('fast');
		$(this).fadeIn('fast;');
		
	});
}

function getRandomColor() {

  var r = function() { return Math.floor(Math.random()*256) };
  return "rgb(" + r() + "," + r() + "," + r() + ")";
}

function defaultColor() {
	$(".square").mouseenter(function() {
		$(this).css('background-color', 'white');
	});
}

function randomColor() {
	$(".square").mouseenter(function() {
		$(this).css('background-color', getRandomColor);
	});
}


//clear grid
function clearGrid() {
	$('.square').remove();
}

//buttons
function newButton() {
	var userInput1 = prompt('Enter a number below 129');
	currentSize = userInput1;
	clearGrid();
	generateGrid(currentSize);
	defaultColor();
}

function colorButton() {
	var userInput2 = prompt('Enter a number below 129');
	currentSize = userInput2;
	clearGrid();
	generateGrid(currentSize);
	randomColor();
	
}

function trailButton() {
	var userInput3 = prompt("Enter a number below 129");
	currentSize = userInput3;
	clearGrid();
	generateGrid(currentSize);
	trailColor();
}

//button event handlers
$("#button-new").on('click', newButton);
$("#button-colour").on('click', colorButton);
$("#button-trail").on('click', trailButton)

});


