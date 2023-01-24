let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let sqX = 30;
let sqY = 30;
let heroX = 1;
let heroY = 1;
let objectx = 10;
let objecty = 7;
let sizex = 20;
let sizey = 10;

canvas.width = sizex * sqX;
canvas.height = sizey * sqY;

function drawEmptyGrid() {
    for(let i = 0; i < canvas.height / sqY; i++) {
        for(let j = 0; j < canvas.width / sqX; j++) {
            context.fillStyle = "white";
            context.fillRect(sqX * j, sqY * i, sqX, sqY);
            context.strokeRect(sqX * j, sqY * i, sqX, sqY);
        }
    }
}

function drawEmptyHero(){
	context.fillStyle = "black";
	context.fillRect(sqX * heroX, sqY + heroY, sqX, sqY);
}

function drawEmptyObject(){
	context.fillStyle = "brown";
	context.fillRect(sqX * objectx, sqY * objecty, sqX, sqY);
}

drawEmptyGrid();
drawEmptyHero();
drawEmptyObject();

document.getElementById("buttonAdd").onclick = function () {
	let inputA = document.getElementById("inputA").value;
    let a = String(inputA);
    document.getElementById("answer").innerHTML = a;
}

canvas.onclick = function(e){
	let x = e.clientX;
	let y = e.clientY;
	heroX = Math.floor(x / sqX);
	heroY = Math.floor(y / sqY);
	drawEmptyGrid();
	context.fillStyle = "black";
	context.fillRect(sqX * heroX, sqY * heroY, sqX, sqY); 
	drawEmptyObject();
}

function moveUp() {
	/*let isUpmost = heroY > 0;
	let isUnderSquare = (heroY === objecty + 1 && heroX === objectx); 
	console.log(isUnderSquare);
	if(!isUpmost && !isUnderSquare){
		heroY--;*/	
	if(heroY > 0){
		heroY -= 1;
	}
}

function moveLeft() {
	/*let isUpmost = heroX > 0;
	let isNextToSquare = (heroX === objectx + 1 && heroY === objecty);
	console.log(isNextToSquare);
	if(!isUpmost && !isNextToSquare){
		heroX--;*/
	if(heroX > 0){
		heroX -= 1;
	}	
}

function moveRight() {
	/*let isUpmost = heroX < 19;
	let isNextToSquare = (heroX === objectx -1 && heroY === objecty);
	console.log(isNextToSquare);
	if(!isUpmost && !isNextToSquare){
		heroX++;*/
	if(heroX < 19){
		heroX += 1;
	}	
}

function moveDown() {
	/*let isUpmost = heroY < 9;
	let isNextToSquare = (heroY === objecty -1 && heroX === objectx);
	console.log(isNextToSquare);
	if(!isUpmost && !isNextToSquare){
		heroY++;*/
	if(heroY < 9){
		heroY += 1;	
	}	
}

document.onkeydown = function(e){
	switch (e.key){
		case "w": moveUp(); break;
		case "a": moveLeft(); break;
		case "d": moveRight(); break;
		case "s": moveDown(); break;
	}
	drawEmptyGrid();
	context.fillStyle = "black";
	context.fillRect(sqX * heroX, sqY * heroY, sqX, sqY);
	drawEmptyObject();
}
