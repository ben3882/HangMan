

    function setup() {
        let myCanvas = createCanvas(400, 400);
        myCanvas.parent("correctGuesses");
        background("azure");
        let color1 = "red";
        let color2 = "black";
        
        
        strokeWeight(5);
        stroke(color2);
        line(100,20,100,325);     //scaffold vertical
        stroke(color2);
        line(75,325,125,325);     //scaffold base
        stroke(color2);
        line(100,20, 200, 20);    //scaffold arm
        line(200,20, 200,45);     //scaffold noose
        
         noLoop();
    }
    function draw() {}
    const dictionaryWord=[["label", "attached to a package"], ["clock", "keeps time"], ["knock", "___, ___, \n who's there?"], ["blood", "red liquid in the body"], 
                        ["truck", "hauls things"], ["dirty", "opposite of clean"], ["taste", "one of the 5 senses"], ["wheel", "goes round and round"],
                        ["books", "read cover to cover"],["tools", "you can fix things with them"],["glass", "you can see through it"],["chair", "sit on one"],
                        
                    ];
    const guessHistory = [];
    
    let n=0;
    let dictionaryCounter = 0;
    
    let correctLetters = [];
    let newWord = dictionaryWord[dictionaryCounter][0];
    $("#hint").text("Hint: " + dictionaryWord[dictionaryCounter][1]).css("textAlign", "left");

$(document).ready(function(){
    $("form").on("submit", function(event){
        event.preventDefault();
        let guess = $("#guess").val();
        $("#guess").val("");
        guess = guess.toUpperCase();
        console.log("Guess = " + guess);
        
        guessHistory.push(guess);
        console.log("Guess history = " + guessHistory);
        $("#guesshistory").text(guessHistory);

        //check if the letter is in the word
        newWord = newWord.toUpperCase();
        for(i =0; i < newWord.length; i++){
            index = newWord.indexOf(guess, i);
            if(index>=0) {
                i=index;
                correctLetters.push(guess);
                console.log("correct letters = " + correctLetters.join(""));
            }
            if(index==-1 && i==0){
                console.log("You guessed wrong");
                drawBody(n);
                n++;
            } 
            if(index==-1) {
                i=newWord.length;
                }
            console.log("index of guess = " + index);
            $(`#index${index}`).text(guess);
            if($("#index0").text() != "" && $("#index1").text() != "" && $("#index2").text() != "" && $("#index3").text() != "" && $("#index4").text() != ""){
                $("#correctanswer").text(dictionaryWord[dictionaryCounter][0].toUpperCase());
                console.log("correct letters = " + correctLetters);
                
                strokeWeight(1);
                fill("red");
                textSize(16);
                text("Winner!", 300, 95);   //Winner text
                
            }
        }
        
    });
});
    $("#newgame").on("click", function(e){
        console.log("you clicked me");
        
        dictionaryCounter++;
        if(dictionaryCounter >= dictionaryWord.length) {
            dictionaryCounter = 0;
        }
        n=0;
        guessHistory.length = 0;
        $("#guesshistory").text(guessHistory);
        newWord = dictionaryWord[dictionaryCounter][0];
        $("#hint").text("Hint: " + dictionaryWord[dictionaryCounter][1]);
        setup();
        for(i=0; i<5; i++){
            $(`#index${i}`).text("");
        }
        correctLetters.length = 0;
        $("#correctanswer").text("");
    });
    
    function drawBody (n) {
        strokeWeight(4);
        stroke("red");
        switch(n) {
            case 0:
                noFill();
                ellipse(200,70,50,50);  //head  
             break;
            case 1:
                line(200,95,200,200);    //body
            break;
            case 2:
                line(200,95,150,120);   //arm-left
            break;
            case 3:
                line(200,95,250,120);   //arm-right
            break;
            case 4:
                line(200,200,150,280);   //leg-left
            break;
            case 5:
                line(200,200,250,280);    //leg-right
                strokeWeight(1);
                fill("red");
                textSize(16);
                text("Game over", 300, 95);   //game over text
                $("#correctanswer").text(dictionaryWord[dictionaryCounter][0].toUpperCase());
            break;
    
            default:
                text("Game over", 300, 95);   //game over text
}   
 /*     ellipse(200,70,50,50);  //head    
        line(200,95,150,120);   //arm-left
        line(200,95,250,120);   //arm-right
        line(200,95,200,200);    //body
        line(200,200,150,280);   //leg-left
        line(200,200,250,280);    //leg-right*/
        }





