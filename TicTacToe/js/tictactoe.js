let activePlayer = 'X'; //This keeps track of who's turn it is
let selectedSquares = []; //This stores all of the moves, to determine win conditions

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber){
    //This condition ensures a square hasn't be selected already.
    if(!selectedSquares.some(element=>element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);
        if(activePlayer === 'X'){
            select.style.backgroundImage = 'url("./media/x.png")';
        } else{
            select.style.backgroundImage = 'url("./media/o.png"'
        }
        selectedSquares.push(squareNumber + activePlayer); //squareNumber and activePlayer are concatenated together and added to array.
        checkWinConditions(); //Calls function to check for a win conditions.
        //This condition is for changing the active player.
        if(activePlayer === 'X'){
            activePlayer = 'O';
        } else{
            activePlayer = 'X';
        }
        audio('./media/place.mp3'); //Plays sound when placing an x or o.
        //This condition checks if it is the computers turn.
        if(activePlayer === 'O'){
            disableClick();
            setTimeout(function () {computersTurn();}, 1000);
        }
        return true;
    }
    //This function results in a random square being selected.
    function computersTurn(){
        let success = false;
        let pickASquare;
        while(!success){
            pickASquare = String(Math.floor(Math.random()*9));
            if(placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for the win conditions, if so the drawLine function is called to draw a line on the approprriate win line.
function checkWinConditions(){
    if(arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100);}
    else if(arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304,558,304);}
    else if(arrayIncludes('6X', '7X', '8X')) {drawWinLine(50,508,558,508);}
    else if(arrayIncludes('0X', '3X', '6X')) {drawWinLine(100,50,100,558);}
    else if(arrayIncludes('1X', '4X', '7X')) {drawWinLine(304,50,304,558);}
    else if(arrayIncludes('2X', '5X', '8X')) {drawWinLine(508,50,508,558);}
    else if(arrayIncludes('6X', '4X', '2X')) {drawWinLine(100,508,510,90);}
    else if(arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520);}

    else if(arrayIncludes('0O', '1O', '2O')) {drawWinLine(50,100,558,100);}
    else if(arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,304,558,304);}
    else if(arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,508);}
    else if(arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558);}
    else if(arrayIncludes('1O', '4O', '7O')) {drawWinLine(304,50,304,558);}
    else if(arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558);}
    else if(arrayIncludes('6O', '4O', '2O')) {drawWinLine(100,508,510,90);}
    else if(arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520);}
    else if(selectedSquares.length >= 9){
        audio('./media/tie.mp3');
        setTimeout(function(){resetGame();}, 1000);
    }

    //This function checks if an array includes 3 strings, to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC){
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if(a === true && b === true && c === true){return true;}
    }
}

//This function makes the body element temporarily unclickable.
function disableClick(){
    body.style.pointerEvents = 'none';
    setTimeout(function(){body.style.pointerEvents = 'auto';}, 1000);
}

//This function takes a string parameter of the path you eariler for placement sound.
function audio(audioURL){
    let audio = new Audio(audioURL);
    audio.play();
}

//This function utilizes the canvas element to draw the win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext('2d');
    let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;

    //This function actually interacts with the canvas.
    function animateLineDrawing(){
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0,0,608,608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = 'black';
        c.stroke();
        //This condition checks if the endpoint is reached.
        if(x1 <= x2 && y1 <= y2){
            if(x < x2){x+=10;}
            if(y < y2){y+=10;}
            if(x >= x2 && y >= y2){cancelAnimationFrame(animationLoop);}
        }
        //Similar to above, but draws for the 642 win condition instead.
        if(x1 <= x2 && y1 >= y2){
            if(x < x2){x+=10;}
            if(y > y2){y-=10;}
            if(x >= x2 && y <= y2){cancelAnimationFrame(animationLoop);}
        }
    }

    //This function clears the canvas after the win line is drawn.
    function clear(){
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio("./media/winGame.mp3");
    animateLineDrawing();
    setTimeout(function(){clear(); resetGame();}, 1000);
}

//This function resets the game in a tie or a win.
function resetGame(){
    for(let i = 0; i < 9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}