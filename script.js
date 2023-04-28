



    var rNumber1 = Math.floor(Math.random() * 6 + 1);
    var diceImageSource1 = ("images/dice" + rNumber1 + ".png"); 
    document.querySelector(".img1").setAttribute("src",diceImageSource1);

    var rNumber2 = Math.floor(Math.random() * 6 + 1);
    var diceImageSource2 = ("images/dice" + rNumber2 + ".png"); 
    document.querySelector(".img2").setAttribute("src",diceImageSource2);

    if(rNumber1 > rNumber2){
        document.querySelector(".win_message").textContent = "player 1 wins";
    }
    else if(rNumber1 < rNumber2){
        document.querySelector(".win_message").textContent = "player 2 wins";
    }
    else if(rNumber1 === rNumber2){
        document.querySelector(".win_message").textContent = "both players wins";
    }



